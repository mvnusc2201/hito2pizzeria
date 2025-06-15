import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import Cart from './components/Cart'
import { pizzaCart } from './data/pizzas'

const App = () => {
  const [view, setView] = useState('home')
  const [cart, setCart] = useState(pizzaCart)

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

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
    <div>
      <Navbar setView={setView} total={total} />
      {view === 'home' && <Home onAdd={handleAddToCart} />}
      {view === 'login' && <LoginPage setView={setView} />}
      {view === 'register' && <RegisterPage setView={setView} />}
      {view === 'cart' && <Cart cart={cart} setCart={setCart} />}
      <Footer />
    </div>
  )
}

export default App
