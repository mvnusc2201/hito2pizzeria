import { Router } from "express";
import { getOrders } from "../controllers/checkout.controller.js";

const router = Router();

router.get("/orders", getOrders);

export default router;
