import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://galaxy:orKxG14IZsrpPxbtN6MOEB5AJ9bXVRuRkcm9Mp6CXsucYAFrYEGe7Swoahh1vEaNHQs7nQ7h02Z5ACDbAAInew==@galaxy.mongo.cosmos.azure.com:10255/test?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@galaxy@", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
export default connectDB;
