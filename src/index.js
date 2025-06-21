// 1. Import dotenv to load environment variables
import dotenv from "dotenv";

// 2. Import the DB connection function from db/index.js
import connectDB from "./db/index.js";

// 3. Configure dotenv to use the `.env` file in root
dotenv.config({
  path: "./env",
});

// 4. Call the database connection function
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      // 5. Log a message indicating the server is running
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    // 6. Log any error that occurs during the connection
    console.error("Error connecting to the database:", error);
    // 7. Exit the process with a failure code
    process.exit(1);
  });
