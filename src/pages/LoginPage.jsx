import { useState } from 'react'

const LoginPage = ({ setView }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setMessage('Todos los campos son obligatorios')
    } else if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres')
    } else {
      setMessage('Inicio de sesión exitoso')
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}

      <div className="mt-3">
        <button className="btn btn-link" onClick={() => setView('register')}>
          ¿No tienes cuenta? Regístrate
        </button>
      </div>
    </div>
  )
}

export default LoginPage
