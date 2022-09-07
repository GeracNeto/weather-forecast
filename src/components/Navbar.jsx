// Libs
import { Link } from 'react-router-dom'

// CSS
import './Navbar.css'

// Logo
import logo from '../assets/images/logo.png'

// Context
import { useAuthValue } from '../context/AuthContext'

const Navbar = () => {

    const { user } = useAuthValue()

    return (
        <div className="navbar">
            <nav>
                <Link to='/'><img src={logo} alt="logo-home" /></Link>
                {!user && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Navbar