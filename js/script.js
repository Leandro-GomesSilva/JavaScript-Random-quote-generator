/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * 
 * It comprises 12 objects containing the quotes.
 * All objects contain at least two properties: quote, source and tags.
 * When it applies, the object will have a property "citation" which holds a reference to the source of the quote.
 * The object will have a property "year", if the year in which the quote was made is known.
 * The property "tags" is itself an array and contain a list of words that categorize the quote, associates an emotion to the quote and informs if the quote was originally made by a real or fictional character.
 * The quotes that come from a "movie" will obligatory have the property "actor", which identifies who interpreted the "source" of the quote.
 * The quotes that come from a "book" will obligatory have a property "author", which identifies who wrote the book.
 *   
***/

const quotes = [
  { 
    quote: "It's alive! It's alive!",
    source: "Henry Frankenstein",
    citation: "Frankenstein",
    year: 1931,
    actor: "Colin Clive",
    tags: ["movie", "enthusiasm", "fiction"]
  },
  { 
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes",
    citation: "The Adventures of Sherlock Holmes",
    year: 1939,
    actor: "Basil Rathbone",
    tags: ["movie", "calm", "fiction"]
  },
  { 
    quote: "Houston, we have a problem.",
    source: "Jim Lovell",
    citation: "Apollo 13",
    year: 1995,
    actor: "Tom Hanks",
    tags: ["movie", "drama", "real"]
  },
  { 
    quote: "My precious.",
    source: "Gollum",
    citation: "The Lord of the Rings: The Two Towers",
    year: 2002,
    actor: "Andy Serkis",
    tags: ["movie", "enthusiasm", "fiction"]
  },
  { 
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    source: "Edson Arantes do Nascimento (Pelé)",
    tags: ["athlete", "motivational", "real"]
  },
  { 
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan",
    tags: ["athlete", "motivational", "real"]
  },
  { 
    quote: "Government of the People, by the People, for the People.",
    source: "Abraham Lincoln",
    year: 1863,
    tags: ["politics", "reflection", "real"]
  },
  { 
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    source: "Sirius Black",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    author: "J.K. Rowling",
    tags: ["book", "reflection", "fiction"]
  },
  { 
    quote: "It is our choices... that show what we truly are, far more than our abilities.",
    source: "Albus Dumbledore",
    citation: "Harry Potter and the Chamber of Secrets",
    year: 1998,
    author: "J.K. Rowling",
    tags: ["book", "reflection", "fiction"]
  },
  { 
    quote: "Everything down here — floats.",
    source: "Pennywise",
    citation: "It",
    year: 1986,
    author: "Stephan King",
    tags: ["book", "fear", "fiction"]
  },
  { 
    quote: "All in all, you're just another brick in the wall.",
    source: "Roger Waters",
    citation: "Another brick in the wall (Part 2)",
    year: 1979,
    tags: ["song", "hopeless", "real"]
  },
  { 
    quote: "Push yourself, because no one else is going to do it for you.",
    source: "Anonymous",
    tags: ["unknown source", "motivational", "real"]
  }
];

/***
 * `getRandomQuote` function: 
 * Generates a random number from 0 to the index of the last object in the quotes array.
 * Returns an object store in quotes array in the index corresponding to the random number.
 * 
 * @returns {Object} An quote object
 * 
***/

function getRandomQuote () {
  let randomNumber =   Math.floor( ( Math.random() * quotes.length ) );
  return quotes[randomNumber];
}

/***
 * `printQuote` function:
 * 
 * @returns {string} A HTML string displaying a random quote. 
 * 
***/

function printQuote () {
  let quoteObject = {};
  quoteObject = getRandomQuote();
  let HTML_text = `<p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}`;

  if ( quoteObject.tags[0] === "movie" ) {
    HTML_text += `<span class="actor">interpreted by ${quoteObject.actor}</span>`;
  }

  if ( Object.keys(quoteObject).includes("citation") ) {
    HTML_text += `<span class="citation">${quoteObject.citation}</span>`;
  }

  if ( quoteObject.tags[0] === "book" ) {
    HTML_text += `<span class="author">written by ${quoteObject.author}</span>`;
  }

  if ( Object.keys("quoteObject").includes("year") ) {
    HTML_text += `<span class="year">${quoteObject.year}</span>`;
  } 
  HTML_text += `</p>`;
  document.getElementById('quote-box').innerHTML = HTML_text;

  // Code learned from this website: https://dev.to/karataev/set-css-styles-with-javascript-3nl5
  document.body.style.background = getRandomColor();

  return;
}

/***
 * `getRandomColor` function:
 * 1. Definies an array of 20 colours. The colours were generated using the website "https://htmlcolorcodes.com/color-picker/" using the "tetradic" method. 
 * It was given preference to darker colors to ensure a contrast with the white color of the quotes.
 * 2. Generates a random number between 0 and the last index of the "colors array".
 * 3. Returns the the element of the "colors array" corresponding to the random number.
 * 
 * @returns {string} A string containing a HEX color code
 * 
***/

function getRandomColor () {
  let colors = [
    "#d2d51f",
    "#1fd57d",
    "#221fd5",
    "#d51f77",
    "#00c2c8",
    "#6a00c8",
    "#c80600",
    "#5ec800",
    "#df6f0c",
    "#13df0c",
    "#0c7cdf",
    "#d80cdf",
    "#813d09",
    "#790981",
    "#094d81",
    "#118109",
    "#2c5b36",
    "#2c3a5b",
    "#5b2c51",
    "#5b4e2c"
  ];
  let randomColor = Math.floor( ( Math.random() * colors.length ) );
  console.log(randomColor);
  return ( colors[randomColor] );
}


// The function printQuote() is called when the page loads to ensure that the original quote written in the original HTML file is not displayed.
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);