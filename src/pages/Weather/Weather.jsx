import Navbar from '../../components/Navbar'
import './Weather.css'

import { useContext, useEffect, useState } from 'react'
import { CityContext } from '../../context/CityContext'

const Weather = () => {

    // get city name from context
    const { cityData, mainData, windData, date, description, icon, error } = useContext(CityContext)

    return (
        <div className='weather'>
            <Navbar />
            <h3 id='day'>
                {date}
            </h3>
            <div className='data'>
                <h2 id='day'>
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
            {error && (
                <p className='error'>{error}</p>
            )}

        </div>
    )
}

export default Weather