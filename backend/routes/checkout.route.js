import { Router } from "express";
import { getOrders } from "../controllers/checkout.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/orders", authMiddleware, getOrders);

export default router;
