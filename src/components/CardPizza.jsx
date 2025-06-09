const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Ingredientes: {ingredients.join(', ')}
          </p>
          <p className="card-text fw-bold">Precio: ${price.toLocaleString('es-CL')}</p>
          <button className="btn btn-primary me-2">Ver más</button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
