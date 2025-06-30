import { Link } from 'react-router-dom'

const Navbar = ({ total }) => {
  const token = false

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
      <div className="navbar-nav w-100 d-flex justify-content-between">
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-light" to="/">🍕 Home</Link>
          <Link className="btn btn-outline-light" to="/pizza/p001">🍕 Pizza</Link>
          {token ? (
            <>
              <Link className="btn btn-outline-light" to="/profile">🔓 Profile</Link>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-light" to="/register">🔐 Register</Link>
            </>
          )}
        </div>
        <Link className="btn btn-outline-light" to="/cart">
          🛒 Total: ${total?.toLocaleString('es-CL') ?? '0'}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
