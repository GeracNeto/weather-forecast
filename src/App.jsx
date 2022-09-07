// CSS
import './App.css'

// Libs
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

// Components

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} /> {/* Fazer verificação se o usuario esta logado para não envia-lo para a page Register */}
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
