import './Search.css'

import searchIcon from '../assets/images/search-location.png'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        // fazer GET dos dados e salvar em context
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <p>City:</p>
            <input type="text" />
            <button><img src={searchIcon} alt="search" /></button>
        </form>
    )
}

export default Search