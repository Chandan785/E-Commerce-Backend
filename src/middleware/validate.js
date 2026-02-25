import AppError from "../utils/AppError.js";

export const validateAddToCart = (req, res, next) => {
  // accept values from body or query params (Postman may send them as query)
  const userId = req.body.userId || req.query.userId;
  const productId = req.body.productId || req.query.productId;
  // quantity may arrive as a string when sent in query params
  const rawQuantity = req.body.quantity ?? req.query.quantity;
  const quantity = rawQuantity !== undefined ? Number(rawQuantity) : undefined;

  if (!userId || !productId || quantity === undefined || Number.isNaN(quantity)) {
    return next(new AppError("All fields are required", 400));
  }

  if (quantity <= 0) {
    return next(new AppError("Quantity must be a positive number", 400));
  }

  // attach normalized values so downstream handlers can rely on them
  req.body.userId = userId;
  req.body.productId = productId;
  req.body.quantity = quantity;

  next();
};

export const validateCreateOrder = (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return next(new AppError("User ID is required", 400));
  }

  next();
};