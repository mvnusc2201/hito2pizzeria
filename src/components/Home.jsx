import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../data/pizzas'

const Home = () => {
  return (
    <div className="container mt-4">
      <Header />
      <div className="row mt-4">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
