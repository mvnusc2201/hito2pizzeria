import { readJson } from "../utils/fs.js";

const filePath = "./db/orders.json";

export const getOrders = async (req, res) => {
  try {
    const orders = await readJson(filePath);
    res.json(orders);
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    res.status(500).json({ message: "Error al obtener las órdenes" });
  }
};
