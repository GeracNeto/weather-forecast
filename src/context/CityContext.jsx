import axios from "axios";
import { createContext, useState } from "react";
import { useConvertData } from "../hooks/useConvertData";

import { db } from "../firebase/config";
import { useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { useAuthValue } from "./AuthContext";

export const CityContext = createContext()

export const CityContextProvider = ({ children }) => {

    const { convertDate } = useConvertData()
    const { user } = useAuthValue()

    const [cityData, setCityData] = useState('')
    const [mainData, setMainData] = useState('')
    const [windData, setWindData] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    const [userKey, setUserKey] = useState('')

    const [error, setError] = useState(null)

    // Resgatar API key do usuário no firestore e colocar na URL aqui
    const userCollectionRef = collection(db, "weatherkey")

    useEffect(() => {

        const getUserKey = async () => {

            const data = await getDocs(userCollectionRef)
            let usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            usersData.filter(item => {
                if (item.email === user.email) {
                    setUserKey(item.apiKey)
                }
            })
        }
        getUserKey()
    })

    const getCityData = (city) => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${userKey}&units=metric`

        console.log(url)
        axios.get(url).
            then(response => {

                const convertedDate = convertDate(response.data.dt)

                setCityData(response.data)
                setMainData(response.data.main)
                setWindData(response.data.wind)
                setDate(convertedDate)
                setDescription(response.data.weather[0].description)
                setIcon(response.data.weather[0].icon)

                setError(null)
            }).
            catch(error => {

                if (error.message.includes('404')) {
                    setError(`City: '${city}' not found...`)
                }
                else if (error.message.includes('401')) {
                    setError('User Key not Valid')
                }
            })
    }

    return (
        <CityContext.Provider value={{ cityData, mainData, windData, date, error, setError, getCityData, description, icon, setIcon }}>{children}</CityContext.Provider>
    )
}
