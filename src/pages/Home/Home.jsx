// CSS
import './Home.css'

// Components
import Navbar from '../../components/Navbar'

const Home = ({ children }) => {
    return (
        <div className='home'>
            <Navbar />
            {children}
        </div>
    )
}

export default Home