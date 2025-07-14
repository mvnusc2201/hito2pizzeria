import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        console.error("❌ Error al traer las pizzas:", err);
      }
    };

    fetchPizzas();
  }, []);

  if (pizzas.length === 0) {
    return <p className="text-white text-center mt-5">Cargando pizzas...</p>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-white mb-4">Nuestras Pizzas</h2>

      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={pizza.img}
                className="card-img-top"
                alt={pizza.name}
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-capitalize">{pizza.name}</h5>
                  <p className="card-text">{pizza.desc}</p>
                  <p className="mb-1">
                    <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
                  </p>
                  <p className="fw-bold">Precio: ${pizza.price}</p>
                </div>
                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={() => addToCart(pizza)}
                >
                  <i className="bi bi-cart-plus"></i> Agregar al Carro
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
