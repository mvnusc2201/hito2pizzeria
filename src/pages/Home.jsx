import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import CardPizza from '../components/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const { addToCart } = useCart()

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
          <CardPizza key={pizza.id} pizza={pizza} onAdd={() => addToCart(pizza)} />
        ))}
      </div>
    </div>
  )
}

export default Home
