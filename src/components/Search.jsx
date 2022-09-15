// CSS
import './Search.css'

// Icone
import searchIcon from '../assets/images/search-location.png'

// Hooks
import { useContext, useState } from 'react'

// Context
import { CityContext } from '../context/CityContext'

// Libs
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate()

    const [cityName, setCityName] = useState('')

    const { getCityData } = useContext(CityContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        let cityNameLowerCase = cityName.toLowerCase()

        getCityData(cityNameLowerCase)

        setCityName('')

        navigate('/weather')
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