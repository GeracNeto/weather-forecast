import { createContext, useState } from "react";

export const CityContext = createContext()

export const CityContextProvider = ({ children }) => {

    const [city, setCity] = useState('Cahoeira de Minas')

    return (
        <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>
    )
}
