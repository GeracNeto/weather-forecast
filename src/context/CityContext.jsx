import axios from "axios";
import { createContext, useState } from "react";
import { useConvertData } from "../hooks/useConvertData";

export const CityContext = createContext()

export const CityContextProvider = ({ children }) => {

    const [cityData, setCityData] = useState('')
    const [mainData, setMainData] = useState('')
    const [windData, setWindData] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    const [error, setError] = useState(null)

    const getCityData = (city) => {

        const { convertDate } = useConvertData()

        // Resgatar API key do usuário no firestore e colocar na URL aqui

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2412e77ba8277b67b33262f41b8ca6ff&units=metric`

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
                
                if(error.message.includes('404')){
                    setError(`City: '${city}' not found...`)
                }
            })
    }

    return (
        <CityContext.Provider value={{ cityData, mainData, windData, date, error, getCityData, description, icon }}>{children}</CityContext.Provider>
    )
}
