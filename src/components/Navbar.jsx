// Libs
import { Link } from 'react-router-dom'

// CSS
import './Navbar.css'

// Logo
import logo from '../assets/images/logo.png'

// Context
import { useAuthValue } from '../context/AuthContext'
import Search from './Search'
import { useAuthentication } from '../hooks/useAuthentication'

const Navbar = () => {

    const { user } = useAuthValue()

    const { logout } = useAuthentication()

    return (
        <nav className='navbar'>
            <div>
                <Link to='/'><img src={logo} alt="logo-home" /></Link>
                {user && <h3>Welcome <span>{user.displayName}</span>!</h3>}
            </div>
            <div className='navigation'>
                {user ? (
                    <Search />
                ) : (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
                <Link to='/about'>About</Link>
                {user && (
                    <button onClick={logout}>Logout</button>
                )}
            </div>

        </nav>
    )
}

export default Navbar
