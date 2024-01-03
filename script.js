function generate() {
    var quotes = {
        "- Nelson Mandela" : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "- Walt Disney" : "The way to get started is to quit talking and begin doing.",
        "- Eleanor Roosevelt" : "The future belongs to those who believe in the beauty of their dreams.",
        "- Mother Teresa" : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "- Aristotle" : "It is during our darkest moments that we must focus to see the light.",
        "- Ralph Waldo Emerson" : "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "- Martin Luther King Jr." : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "- Thomas A. Edison" : "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "- Maya Angelou" : "You will face many defeats in life, but never let yourself be defeated.",
        "- Abraham Lincoln" : "In the end, it's not the years in your life that count. It's the life in your years.",
        "- Mother Teresa" : "In this life we cannot do great things. We can only do small things with great love.",
        "- Eleanor Roosevelt" : "Life is a succession of lessons which must be lived to be understood.",
        "- Oscar Wilde" : "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        "- Mae West" : "You only live once, but if you do it right, once is enough.",
        "- Abraham Lincoln" : "Don't worry when you are not recognized, but strive to be worthy of recognition."
    };

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document .getElementById("quote").innerHTML = '"'+quote+'"';
    document .getElementById("author").innerHTML = author;
}

window.onload = generate();