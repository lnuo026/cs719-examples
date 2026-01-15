import express from "express";

const router = express.Router();

router.get("/",(req, res) =>{
    return res.json({message: "ssss"});
});


import apiRouter from "./api/api.js";
router.use("./api" , apiRouter);

export default router;