const Cart = ({ cart, setCart }) => {
  const aumentar = (id) => {
    const nuevo = cart.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p)
    setCart(nuevo)
  }

  const disminuir = (id) => {
    const nuevo = cart
      .map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
      .filter(p => p.quantity > 0)
    setCart(nuevo)
  }

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.map(pizza => (
        <div key={pizza.id} className="d-flex align-items-center border-bottom py-2">
          <img src={pizza.img} alt={pizza.name} width="80" className="me-3" />
          <div className="flex-grow-1">
            <h5>{pizza.name}</h5>
            <p>${pizza.price.toLocaleString('es-CL')}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-danger btn-sm" onClick={() => disminuir(pizza.id)}>-</button>
            <span>{pizza.quantity}</span>
            <button className="btn btn-success btn-sm" onClick={() => aumentar(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <h4 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h4>
      <button className="btn btn-primary mt-2">Pagar</button>
    </div>
  )
}

export default Cart
