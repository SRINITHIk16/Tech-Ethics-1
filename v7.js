const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];

document.getElementById('generateQuoteButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
});