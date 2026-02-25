import express from "express";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

 //routes

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Health Check

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ecommerce API is running"
  });
});

 // 404 Handler

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

 
app.use(errorHandler);

export default app;