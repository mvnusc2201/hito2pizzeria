import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const MyOrders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/checkout", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error al obtener órdenes:", error);
      }
    };

    if (user?.token) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="container mt-5">
      <h2>Mis pedidos</h2>
      {orders.length === 0 ? (
        <p>No has realizado pedidos aún.</p>
      ) : (
        <ul className="list-group">
          {orders.map((order, i) => (
            <li key={i} className="list-group-item">
              <strong>Fecha:</strong> {new Date(order.date).toLocaleString()}<br />
              <strong>Total:</strong> ${order.total}<br />
              <strong>Pizzas:</strong>
              <ul>
                {order.cart.map((pizza, idx) => (
                  <li key={idx}>
                    {pizza.name} x{pizza.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
