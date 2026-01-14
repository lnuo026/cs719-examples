// Configure environment variables
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import morgan from "morgan";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// Creates the express server
const app = express();

// import { helloMiddleware } from "./middleware/hello-middleware.js";
// app.use(helloMiddleware);

// Configure middleware (logging, CORS support, JSON parsing support, static files support)
// app.use(morgan("combined"));

// app.use(cors());

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:3000"]
}));
    

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// Our routes
app.get("/", (req, res) => {
    return res.json({ message: "Hello, world!" });
});

import apiRoutes from "./routes/api.js";
app.use("/api", apiRoutes);

// Start the server running.
app.listen(PORT, () => {
    console.log(`CS719 example backend listening on port ${PORT}`);
});
