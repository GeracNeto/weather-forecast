import './Search.css'

import searchIcon from '../assets/images/search-location.png'
import { useContext, useState } from 'react'
import { CityContext } from '../context/CityContext'


const Search = () => {

    const [cityName, setCityName] = useState('')

    const {getCityData} = useContext(CityContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await getCityData(cityName)

        setCityName('')
        
        // maybe naviagte('/weather) becasue if the search has been on about page
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <p>City:</p>
            <input type="text" value={cityName} onChange={e => setCityName(e.target.value)} />
            <button><img src={searchIcon} alt="search" /></button>
        </form>
    )
}

export default Search