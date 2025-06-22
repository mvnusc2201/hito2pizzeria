import { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    fetch('/api/pizzas/p001') // puedes cambiar el id si quieres otra
      .then(res => res.json())
      .then(data => setPizza(data))
      .catch(err => console.error('Error al obtener la pizza:', err))
  }, [])

  if (!pizza) return <p>Cargando pizza...</p>

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h3 className="card-title">{pizza.name}</h3>
          <p className="card-text">{pizza.desc}</p>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
          <p><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL')}</p>
        </div>
      </div>
    </div>
  )
}

export default Pizza
