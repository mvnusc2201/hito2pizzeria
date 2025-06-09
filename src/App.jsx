import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

const App = () => {
  const [view, setView] = useState('register') // Mostrar registro al inicio

  return (
    <div>
      <Navbar setView={setView} />
      {view === 'home' && <Home />}
      {view === 'login' && <LoginPage setView={setView} />}
      {view === 'register' && <RegisterPage setView={setView} />}
      <Footer />
    </div>
  )
}

export default App
