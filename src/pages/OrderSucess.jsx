import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>¡Gracias por tu compra! 🎉</h1>
      <p>Tu pedido ha sido realizado con éxito.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
