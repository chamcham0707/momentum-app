const quotes = [
    {
        quote: "We did not change as we grew older; we just became more clearly ourselves.",
        author: "-Lynn Hall-",
    },
    {
        quote: "Life is tough, but it's tougher when you're stupid.",
        author: "-John Wayne-",
    },
    {
        quote: "Life is something that happens when you can't get to sleep.",
        author: "-Fran Lebowitz-",
    },
    {
        quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
        author: "-Barack Obama-",
    },
    {
        quote: "The ideal man bears the accidents of life with dignity and grace, making the best of circumstances.",
        author: "-Aristotle-",
    },
    {
        quote: "We improve ourselves by victories over ourself. There must be contests, and you must win.",
        author: "-Edward Gibbon-",
    },
    {
        quote: "While we stop to think, we often miss our opportunity.",
        author: "-Publilius Syrus-",
    },
    {
        quote: "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
        author: "-Dr.David M. Burns-",
    },
    {
        quote: "It's choice - not chance - that determines your destiny.",
        author: "-Jean Nidetch-",
    },
    {
        quote: "A single day is enough to make us a little larger.",
        author: "-Paul Klee-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;