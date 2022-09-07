// CSS
import Navbar from '../../components/Navbar'
import './Home.css'

const Home = ({ children }) => {
    return (
        <div className='home'>
            <Navbar />
            {children}
        </div>
    )
}

export default Home