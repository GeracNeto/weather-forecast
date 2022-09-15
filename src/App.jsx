// CSS
import './App.css'

// Libs
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// Pages
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Weather from './pages/Weather/Weather'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'

// Context
import { AuthProvider } from './context/AuthContext'
import { CityContextProvider } from './context/CityContext'

// Hooks
import { useAuthentication } from './hooks/useAuthentication'
import { useEffect, useState } from 'react'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  const loadingUser = user === undefined

  if (loadingUser) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <CityContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={!user ? <Login /> : <Navigate to='/weather' />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/weather' />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/weather' />} />
              <Route path='/weather' element={user ? <Weather /> : <Navigate to='/login' />} />
            </Routes>
          </BrowserRouter>
        </CityContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App
