const messages = [
    "Steph",
    "Dave",
    "Katy",
    "Panfilo",
    "Anne",
    "Witney",
    "Brit"
];

const randomMessages = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};
module.exports = { randomMessages };
