import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongodb sucessfully");
  } catch (error) {
    console.log("Error connecting in the mongodb");
    process.exit(1);
  }
};
