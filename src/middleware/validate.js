import AppError from "../utils/AppError.js";

export const validateAddToCart = (req, res, next) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return next(new AppError("All fields are required", 400));
  }

  if (typeof quantity !== "number" || quantity <= 0) {
    return next(new AppError("Quantity must be a positive number", 400));
  }

  next();
};

export const validateCreateOrder = (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return next(new AppError("User ID is required", 400));
  }

  next();
};