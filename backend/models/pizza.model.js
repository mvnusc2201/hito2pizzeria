import { readFile } from "fs/promises";

const getPizzas = async () => {
  const data = await readFile("db/pizzas.json", "utf-8");
  return JSON.parse(data);
};

const getPizza = async (id) => {
  const pizzas = await getPizzas();
  return pizzas.find((p) => p.id === id);
};

export const pizzaModel = {
  getPizzas,
  getPizza,
};
