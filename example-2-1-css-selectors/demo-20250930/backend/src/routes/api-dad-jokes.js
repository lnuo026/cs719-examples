import express from "express";
const router = express.Router();

// Dad jokes routes
import { dadJokes, getRandomDadJoke, addJoke } from "../data/dad-jokes.js";

router.get("/", (req, res) => {
    return res.json(dadJokes);
});

router.post("/", (req, res) => {
    const newJoke = req.body.joke;
    if (!newJoke || typeof (newJoke) !== "string" || newJoke.length === 0) {
        return res.status(422).send("joke must be a string with length > 0");
    }

    addJoke(newJoke);
    return res.sendStatus(201);
});

router.get("/random", (req, res) => {

    let numJokes = parseInt(req.cookies?.numJokes);
    if (isNaN(numJokes)) numJokes = 0;

    numJokes++;

    const result = {
        joke: getRandomDadJoke(),
        numJokes
    }

    return res
        .cookie("numJokes", numJokes, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 week
        })
        .json(result);
});

export default router;