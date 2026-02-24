import express from "express";
import { createOrder } from "../controllers/order.controller.js";
import { validateCreateOrder } from "../middleware/validate.js";

const router = express.Router();

/**
 * POST /api/orders
 */
router.post("/", validateCreateOrder, createOrder);

export default router;