import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

const PORT  = process.env.PORT ?? 3000;

const app = express();

app.use(morgan("conbined"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

import routes from "./routes/routes.js";
app.use("/", routes);

app.listen(PORT ,()=>{
    console.log(`${PORT}`);
})
