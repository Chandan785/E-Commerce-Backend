import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart
} from "../controllers/cart.controller.js";

import { validateAddToCart } from "../middleware/validate.js";

const router = express.Router();

/**
 * POST /api/cart/add
 */
router.post("/add", validateAddToCart, addToCart);

/**
 * GET /api/cart/:userId
 */
router.get("/:userId", getCart);

/**
 * DELETE /api/cart/remove
 */
router.delete("/remove", removeFromCart);

export default router;