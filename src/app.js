import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // Allow cookies to be sent with requests
  })
);
app.use(express.json({ limit: "16kb" })); // Increase the limit for JSON payloads
app.use(express.static("public")); // Serve static files from the 'public' directory
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//Route creation
app.use("/api/v1/users", userRouter);

export { app };
