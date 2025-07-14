import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    fetch(`/api/pizzas/${id}`)
      .then(res => res.json())
      .then(data => setPizza(data))
      .catch(err => console.error('Error al obtener la pizza:', err))
  }, [id])

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>

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
