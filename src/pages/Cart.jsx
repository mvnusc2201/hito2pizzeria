import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, increase, decrease, total } = useCart()

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map(pizza => (
            <div key={pizza.id} className="d-flex align-items-center border-bottom py-2">
              <img src={pizza.img} alt={pizza.name} width="80" className="me-3" />
              <div className="flex-grow-1">
                <h5>{pizza.name}</h5>
                <p>${pizza.price.toLocaleString('es-CL')}</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-danger btn-sm" onClick={() => decrease(pizza.id)}>-</button>
                <span>{pizza.quantity}</span>
                <button className="btn btn-success btn-sm" onClick={() => increase(pizza.id)}>+</button>
              </div>
            </div>
          ))}
          <h4 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h4>
          <button className="btn btn-primary mt-2">Pagar</button>
        </>
      )}
    </div>
  )
}

export default Cart
