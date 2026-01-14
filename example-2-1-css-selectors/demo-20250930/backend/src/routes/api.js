import express from "express";
const router = express.Router();

import greetingsRoutes from "./api-greetings.js";
router.use("/greetings", greetingsRoutes);

import dadJokesRoutes from "./api-dad-jokes.js";
router.use("/dad-jokes", dadJokesRoutes);

export default router;