import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="container mt-5 text-center">
    <h1>404 - Página no encontrada</h1>
    <p>La página que buscas no existe.</p>
    <Link className="btn btn-primary" to="/">Volver al Home</Link>
  </div>
)

export default NotFound
