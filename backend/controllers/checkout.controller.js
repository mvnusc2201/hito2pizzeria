import { readJson } from "../utils/fs.js";

const filePath = "./db/orders.json";

export const getOrders = async (req, res) => {
  try {
    const allOrders = await readJson(filePath);
    const userEmail = req.user?.email;

    if (!userEmail) {
      return res.status(401).json({ message: "No autorizado" });
    }

    const userOrders = allOrders.filter((order) => order.email === userEmail);
    res.json(userOrders);
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    res.status(500).json({ message: "Error al obtener las órdenes" });
  }
};
