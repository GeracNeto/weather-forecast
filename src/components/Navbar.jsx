import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    // Mudar a nav se o usuário estiver logado
    return (
        <div className="navbar">
            <nav>
                <Link to='/'><img src={logo} alt="logo-home" /></Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Navbar