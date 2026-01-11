import express from "express";

const router = express.Router();

// import child routes 继续挂在子routes
import customersRoutes from "./api-customers.js";
router.use("/customers", customersRoutes);

export default router;
