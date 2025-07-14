import express from "express";
import morgan from "morgan";
import cors from "cors";

import pizzaRoutes from "./routes/pizza.route.js";
import authRoutes from "./routes/auth.route.js";
import checkoutRoutes from "./routes/checkout.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/pizzas", pizzaRoutes);
app.use("/api", authRoutes);
app.use("/api", checkoutRoutes);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
