import Navbar from '../../components/Navbar'
import './Weather.css'

import teste from '../../assets/images/rainy-day.png'
import { useAuthValue } from '../../context/AuthContext'
import { useEffect } from 'react'

const Weather = () => {

    // get firebase here

    return (
        <div className='weather'>
            <Navbar />
            <h3 id='day'>
                Thu, April 28
            </h3>
            <div className='data'>
                <img src={teste} alt="teste" />
                <p>Mostly Cloud</p>
                <h1>22°</h1>
                <div className='max-low'>
                    <p>H: 24°</p>
                    <p>L: 7°</p>
                </div>
                <div className='another-data'>
                    <p>H: 24 %</p>
                    <p>P: 1015 mbar</p>
                    <p>W: 7 km/h</p>
                </div>

            </div>

        </div>
    )
}

export default Weather