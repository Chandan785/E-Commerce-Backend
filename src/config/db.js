import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_URI_ATLAS
        : process.env.MONGO_URI_LOCAL;

    await mongoose.connect(uri);

    if (process.env.NODE_ENV !== "production") {
      console.log("MongoDB Connected");
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("DB connection failed:", error.message);
    }
    process.exit(1);
  }
};

export default connectDB;