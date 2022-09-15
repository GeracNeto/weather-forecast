// CSS
import './Weather.css'

// Hooks
import { useContext, useEffect } from 'react'

// Context
import { CityContext } from '../../context/CityContext'

// Components
import Navbar from '../../components/Navbar'

const Weather = () => {

    const { cityData, mainData, windData, date, description, error, setError, icon, setIcon } = useContext(CityContext)

    useEffect(() => {
        setIcon(null)
        setError(null)
    }, [])

    return (
        <div className='weather'>
            <Navbar />
            {icon ? (
                <>
                    <h3 id='day'>
                        {date}
                    </h3>
                    <div className='data'>
                        <h2>
                            {cityData.name}
                        </h2>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
                        <p>{description}</p>
                        <h1>{mainData.temp} °C</h1>
                        <div className='max-low'>
                            <p>H: {mainData.temp_max} °C</p>
                            <p>L: {mainData.temp_min} °C</p>
                        </div>
                        <div className='another-data'>
                            <p>H: {mainData.humidity} %</p>
                            <p>P: {mainData.pressure} hPa</p>
                            <p>W: {windData.speed} km/h</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className='data'>
                    <h2>Search a city to GET data ...</h2>
                </div>
            )}
            {error && (
                <p className='error'>{error}</p>
            )}
        </div>
    )
}

export default Weather