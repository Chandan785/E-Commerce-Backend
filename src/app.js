import express from "express";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

/* ========================
   GLOBAL MIDDLEWARE
======================== */

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* ========================
   ROUTES
======================== */

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

/* ========================
   HEALTH CHECK (Optional but Professional)
======================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ecommerce API is running"
  });
});

/* ========================
   404 HANDLER
======================== */

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

/* ========================
   ERROR HANDLER (MUST BE LAST)
======================== */

app.use(errorHandler);

export default app;