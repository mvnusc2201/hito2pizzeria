import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = ({ total }) => {
  const { token, setToken } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
      <div className="navbar-nav w-100 d-flex justify-content-between">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={() => navigate('/')}>🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light" onClick={() => navigate('/profile')}>🔓 Profile</button>
              <button className="btn btn-outline-light" onClick={handleLogout}>🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light" onClick={() => navigate('/login')}>🔐 Login</button>
              <button className="btn btn-outline-light" onClick={() => navigate('/register')}>🔐 Register</button>
            </>
          )}
        </div>
        <button className="btn btn-outline-light" onClick={() => navigate('/cart')}>
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
