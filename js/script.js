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
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do",
    source: "Edson Arantes do Nascimento (Pelé)",
    tags: ["athlete", "motivational", "real"]
  },
  { 
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan",
    tags: ["athlete", "motivational", "real"]
  },
  { 
    quote: "Government of the People, by the People, for the People",
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
  console.log(randomNumber);
  console.log(quotes[randomNumber]);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote () {
  let quoteObject = {};
  quoteObject = getRandomQuote();
  let HTML_text = `<p class="quote"> ${quoteObject.quote} </p>
    <p class="source"> ${quoteObject.source} `;

  if ( quoteObject.tags[0] = "movie" ) {
    HTML_text += `<span class="actor"> (Interpreted by:${quoteObject.actor}) </span>`;
  }

  if ( quoteObject.keys().includes("citation") ) {
    HTML_text += `<span class="citation"> ${quoteObject.citation} </span>`;
  }

  if ( quoteObject.tags[0] = "book" ) {
    HTML_text += `<span class="author"> (written by:${quoteObject.author}) </span>`;
  }

  if ( quoteObject.keys().includes("year") ) {
    HTML_text += `<span class="year"> ${quoteObject.year} </span>`;
  }
  
  HTML_text += `</p>`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);