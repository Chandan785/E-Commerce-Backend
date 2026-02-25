import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

 // Get port from environment variables or default to 5000

const PORT = process.env.PORT || 5000;
//start server after DB connection is successful

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      if (process.env.NODE_ENV !== "production") {
        console.log(`🚀 Server running on port ${PORT}`);
      }
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Failed to start server:", error.message);
    }
    process.exit(1);
  }
};

startServer();