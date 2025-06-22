function CardPizza({ pizza }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
          <p><strong>Precio:</strong> ${pizza.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
