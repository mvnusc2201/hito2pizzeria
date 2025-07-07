import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  const addToCart = (pizza) => {
    const found = cart.find(p => p.id === pizza.id)
    if (found) {
      setCart(cart.map(p =>
        p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
      ))
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }])
    }
  }

  const increase = (id) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ))
  }

  const decrease = (id) => {
    setCart(cart
      .map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
      .filter(p => p.quantity > 0))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  )
}
