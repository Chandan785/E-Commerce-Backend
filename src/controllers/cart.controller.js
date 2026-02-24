import Cart from "../models/Cart.model.js";
import Product from "../models/Product.model.js";
import AppError from "../utils/AppError.js";

export const addToCart = async (req, res, next) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity || quantity <= 0) {
      return next(new AppError("Invalid input", 400));
    }

    const product = await Product.findById(productId);
    if (!product) return next(new AppError("Product not found", 404));

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      if (quantity > product.stock) {
        return next(new AppError("Insufficient stock", 400));
      }

      cart = await Cart.create({
        userId,
        items: [{ product: productId, quantity }]
      });
    } else {
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        const newQuantity = cart.items[itemIndex].quantity + quantity;

        if (newQuantity > product.stock) {
          return next(new AppError("Stock limit exceeded", 400));
        }

        cart.items[itemIndex].quantity = newQuantity;
      } else {
        if (quantity > product.stock) {
          return next(new AppError("Insufficient stock", 400));
        }

        cart.items.push({ product: productId, quantity });
      }

      await cart.save();
    }

    res.status(200).json({
      success: true,
      message: "Product added to cart"
    });
  } catch (error) {
    next(error);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId }).populate("items.product");

    if (!cart) {
      return res.status(200).json({
        success: true,
        data: { items: [], total: 0 }
      });
    }

    const total = cart.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    res.status(200).json({
      success: true,
      data: {
        items: cart.items,
        total
      }
    });
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) return next(new AppError("Cart not found", 404));

    cart.items = cart.items.filter(
      item => item.product.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product removed from cart"
    });
  } catch (error) {
    next(error);
  }
};