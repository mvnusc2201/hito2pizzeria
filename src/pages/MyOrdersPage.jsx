import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const MyOrdersPage = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/checkout/orders", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!res.ok) throw new Error("Error al cargar pedidos");

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, [user.token]);

  return (
    <div className="container mt-5">
      <h2>Mis pedidos</h2>
      {error && <p className="text-danger">{error}</p>}
      {orders.length === 0 ? (
        <p>No tienes pedidos aún.</p>
      ) : (
        <ul className="list-group">
          {orders.map((order, i) => (
            <li key={i} className="list-group-item">
              <strong>Pedido #{i + 1}</strong>
              <ul>
                {order.cart.map((item, j) => (
                  <li key={j}>
                    {item.name} x{item.quantity} = ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrdersPage;
