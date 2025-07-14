const CardPizza = ({ pizza, addToCart }) => {
  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
        <p><strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}</p>
        <button className="btn btn-primary mt-auto" onClick={() => addToCart(pizza)}>
          Agregar al Carro
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
