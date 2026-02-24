import express from "express";
import {
  getProducts,
  getSingleProduct
} from "../controllers/product.controller.js";

const router = express.Router();

/**
 * GET /api/products
 * Query params:
 *  - page
 *  - limit
 *  - search
 */
router.get("/", getProducts);

/**
 * GET /api/products/:id
 */
router.get("/:id", getSingleProduct);

export default router;