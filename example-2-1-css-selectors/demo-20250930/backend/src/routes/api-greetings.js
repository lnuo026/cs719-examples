import express from "express";
const router = express.Router();

// Greetings routes
import { greetings, getRandomGreeting, getGreetingByLanguage } from "../data/greetings.js";

router.get("/", (req, res) => {
    return res.json(greetings);
});

// GET /api/greetings/random
router.get("/random", (req, res) => {
    return res.json(getRandomGreeting());
});

router.get("/:language", (req, res) => {
    const greeting = getGreetingByLanguage(req.params.language);
    if (!greeting) return res.sendStatus(404);
    return res.json(greeting);
});

export default router;