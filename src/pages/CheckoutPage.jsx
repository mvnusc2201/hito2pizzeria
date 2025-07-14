import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          email: user.email,
          cart,
          total: getTotalPrice(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje("✅ Pedido realizado con éxito");
        clearCart();
        setTimeout(() => navigate("/myorders"), 2000);
      } else {
        setMensaje(`❌ Error: ${data.error || "No se pudo procesar el pedido"}`);
      }
    } catch (error) {
      console.error("Error en checkout:", error);
      setMensaje("❌ Error del servidor");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Resumen del pedido</h2>
      <ul className="list-group">
        {cart.map((pizza, i) => (
          <li key={i} className="list-group-item">
            {pizza.name} x{pizza.quantity} = ${pizza.price * pizza.quantity}
          </li>
        ))}
      </ul>
      <h4 className="mt-3">Total: ${getTotalPrice()}</h4>
      <button className="btn btn-success mt-3" onClick={handleCheckout}>
        Confirmar pedido
      </button>
      {mensaje && <p className="mt-3">{mensaje}</p>}
    </div>
  );
};

export default CheckoutPage;
