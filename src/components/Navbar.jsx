const Navbar = ({ setView, total }) => {
  const token = false

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
      <div className="navbar-nav w-100 d-flex justify-content-between">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={() => setView('home')}>🍕 Home</button>
          <button className="btn btn-outline-light" onClick={() => setView('pizza')}>🍕 Pizza</button>
          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light" onClick={() => setView('login')}>🔐 Login</button>
              <button className="btn btn-outline-light" onClick={() => setView('register')}>🔐 Register</button>
            </>
          )}
        </div>
        <button className="btn btn-outline-light" onClick={() => setView('cart')}>
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
