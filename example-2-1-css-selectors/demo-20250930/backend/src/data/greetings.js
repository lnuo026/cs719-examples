export const greetings = [
    { greeting: "Hello", language: "English" },
    { greeting: "Hola", language: "Spanish" },
    { greeting: "Bonjour", language: "French" },
    { greeting: "Hallo", language: "German" },
    { greeting: "Ciao", language: "Italian" },
    { greeting: "こんにちは", language: "Japanese" },
    { greeting: "안녕하세요", language: "Korean" },
    { greeting: "你好", language: "Chinese" },
    { greeting: "Привет", language: "Russian" },
    { greeting: "Olá", language: "Portuguese" },
    { greeting: "Merhaba", language: "Turkish" },
    { greeting: "नमस्ते", language: "Hindi" },
    { greeting: "Salam", language: "Persian" },
    { greeting: "Γειά σου", language: "Greek" },
    { greeting: "Shalom", language: "Hebrew" },
    { greeting: "Sawubona", language: "Zulu" },
    { greeting: "Hej", language: "Swedish" },
    { greeting: "Ahoj", language: "Czech" },
    { greeting: "Hallo", language: "Dutch" },
    { greeting: "Sveiki", language: "Latvian" }
];

export function getRandomGreeting() {
    const i = Math.floor(Math.random() * greetings.length);
    return greetings[i];
}

export function getGreetingByLanguage(language) {
    if (!language) return null;
    return greetings.find(g => g.language.toLowerCase() === language.toLowerCase());
}