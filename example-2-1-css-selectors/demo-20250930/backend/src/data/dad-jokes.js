export const dadJokes = [
    "What's orange and sounds like a parrot? A carrot.",
    "Why can't a bicycle stand up by itself? It's two tired.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the cookie go to the doctor? Because it felt crumbly.",
    "What do you call a sleeping bull? A bulldozer.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the coffee file a police report? It got mugged.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one."
];

export function getRandomDadJoke() {
    const i = Math.floor(Math.random() * dadJokes.length);
    return dadJokes[i];
}

/**
 * Adds a new joke.
 * 
 * @param {string} joke the joke to add
 */
export function addJoke(joke) {
    dadJokes.push(joke);
}