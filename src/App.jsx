// CSS
import './App.css'

// Libs
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'

// Context
import { AuthProvider } from './context/AuthContext'

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

  console.log(user)

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register />} /> {/* Fazer verificação se o usuario esta logado para não envia-lo para a page Register */}
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
