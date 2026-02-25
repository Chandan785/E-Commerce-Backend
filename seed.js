import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import Product from "./src/models/Product.model.js";

dotenv.config();

const seedProducts = [
  {
    name: "Essence Mascara Lash Princess",
    description: "Popular mascara known for volumizing",
    price: 9.99,
    stock: 99,
    category: "beauty"
  },
  {
    name: "iPhone 15",
    description: "Latest Apple iPhone",
    price: 80000,
    stock: 10,
    category: "mobile"
  },
  {
    name: "Samsung Galaxy S24",
    description: "Latest Samsung flagship",
    price: 75000,
    stock: 8,
    category: "mobile"
  }
];

const seedData = async () => {
  try {
    await connectDB();

    await Product.deleteMany(); // clear old data

    await Product.insertMany(seedProducts);

    if (process.env.NODE_ENV !== "production") {
      console.log("✅ Products Seeded Successfully");
    }
    process.exit();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Seeding Failed:", error.message);
    }
    process.exit(1);
  }
};

seedData();