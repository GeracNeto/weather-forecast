import axios from "axios";
import { createContext, useState } from "react";

export const CityContext = createContext()

export const CityContextProvider = ({ children }) => {

    const [cityData, setCityData] = useState('')
    const [atmData, setAtmData] = useState('')

    const getCityData = async (city) => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2412e77ba8277b67b33262f41b8ca6ff`

        console.log(url)
        axios.get(url).
        then(response => {
            setCityData(response.data)
            setAtmData(response.data.main)
        }).
        catch(error => console.log(error))

    }

    return (
        <CityContext.Provider value={{cityData, atmData, getCityData }}>{children}</CityContext.Provider>
    )
}
