import { useEffect, useState } from 'react'
import CardPizza from './CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(err => console.error('Error al obtener las pizzas:', err))
  }, [])

  return (
    <div className="container mt-4">
      <h2>Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map(pizza => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default Home
