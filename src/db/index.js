// 1. Import mongoose for MongoDB interaction
import mongoose from "mongoose";

// 2. Import the database name constant from constant.js
import { DB_NAME } from "../constant.js";

// 3. Define async function to connect to DB
const connectDB = async () => {
  try {
    // 4. Connect using mongoose, using URI and DB name from env and constants
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // 5. Log successful connection with DB host info
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // 6. Log error if connection fails
    console.log("MONGODB connection error ", error);

    // 7. Exit the process with failure code
    process.exit(1);
  }
};

// 8. Export the connectDB function as default for use in other files
export default connectDB;
