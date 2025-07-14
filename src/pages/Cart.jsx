import { useCart } from '../context/CartContext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, total, clearCart } = useCart();
  const { token, email } = useContext(UserContext);

  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          cart,
          total,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Pedido procesado correctamente');
        clearCart();
      } else {
        alert(`❌ Hubo un problema al procesar tu pedido: ${data.error}`);
      }
    } catch (error) {
      console.error('❌ Error al enviar el pedido:', error);
      alert('❌ Hubo un problema al procesar tu pedido');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <button onClick={handleCheckout} className="btn btn-success mt-3">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
