import { useEffect, useState } from 'react'
import CardPizza from '../components/CardPizza'

const Home = ({ cart, setCart }) => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('/api/pizzas')
      .then(res => res.json())
      .then(data => setPizzas(data))
      .catch(err => console.error('Error al obtener las pizzas:', err))
  }, [])

  const handleAddToCart = (pizza) => {
    const found = cart.find(p => p.id === pizza.id)
    if (found) {
      const nuevo = cart.map(p =>
        p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
      )
      setCart(nuevo)
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }])
    }
  }

  return (
    <div className="container mt-4">
      <h2>Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map(pizza => (
          <CardPizza key={pizza.id} pizza={pizza} onAdd={() => handleAddToCart(pizza)} />
        ))}
      </div>
    </div>
  )
}

export default Home
