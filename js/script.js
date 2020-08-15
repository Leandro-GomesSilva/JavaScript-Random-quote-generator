/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

******************************************/

/*** 
 * `quotes` array
 * 
 * It comprises 12 objects containing the quotes.
 * All objects contain at least two properties: quote, source and tags.
 * When it applies, the object will have a property "citation" which holds a reference to the source of the quote.
 * The object will have a property "year", if the year in which the quote was made is known.
 * The property "tags" is itself an array and contain a list of words that categorize the quote (can be the type of media where the quote originates, an emotion related to the quote, 
 *   if the quote comes from a real or fictional character, the sport if the quote source is an athlete, the political office if the quote has a political origin etc.)
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
    tags: ["movie", "enthusiastic", "fiction"]
  },
  { 
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes",
    citation: "The Adventures of Sherlock Holmes",
    year: 1939,
    actor: "Basil Rathbone",
    tags: ["movie", "certain", "fiction"]
  },
  { 
    quote: "Houston, we have a problem.",
    source: "Jim Lovell",
    citation: "Apollo 13",
    year: 1995,
    actor: "Tom Hanks",
    tags: ["movie", "sorrowful", "real"]
  },
  { 
    quote: "My precious.",
    source: "Gollum",
    citation: "The Lord of the Rings: The Two Towers",
    year: 2002,
    actor: "Andy Serkis",
    tags: ["movie", "fantasy", "amused", "fiction"]
  },
  { 
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    source: "Edson Arantes do Nascimento (Pelé)",
    tags: ["athlete", "football", "ambitious", "real"]
  },
  { 
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan",
    tags: ["athlete", "basketball", "empowered", "real"]
  },
  { 
    quote: "Government of the People, by the People, for the People.",
    source: "Abraham Lincoln",
    year: 1863,
    tags: ["politics", "US president", "optimistic", "real"]
  },
  { 
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    source: "Sirius Black",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    author: "J.K. Rowling",
    tags: ["book", "fantasy", "disturbed", "fiction"]
  },
  { 
    quote: "It is our choices... that show what we truly are, far more than our abilities.",
    source: "Albus Dumbledore",
    citation: "Harry Potter and the Chamber of Secrets",
    year: 1998,
    author: "J.K. Rowling",
    tags: ["book", "fantasy", "inspired", "fiction"]
  },
  { 
    quote: "Everything down here — floats.",
    source: "Pennywise",
    citation: "It",
    year: 1986,
    author: "Stephan King",
    tags: ["book", "horrified", "fiction"]
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
    tags: ["unknown source", "determined"]
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
 * `getRandomColor` function:
 * 1. Defines an arrow function to generate a random rgb number from 0 to 255
 * 2. Generates a array of three random numbers from 0 to 255
 * 3. Returns the array with three numbers from 0 to 255 that corresponds to a RGB color code
 * 
 * @returns {Array.<number>} A array containing 3 numbers from 0 to 255
 * 
***/

function getRandomColor () {
  const rgbNumber = () => {return Math.floor( ( Math.random() * 256 ) )};
  let randomColor = [ rgbNumber(), rgbNumber(), rgbNumber() ];
  return (randomColor);
}

/***
 * `printQuote` function:
 * Prints a quote, as well as all of its corresponding properties in the Element "quote box"
 * 1. Declares an object literal
 * 2. Assigns a quote object to it via "getRandomQuote" function
 * 3. Builds the HTML_text string with the HTML code, in order to display the quote information (following the steps provided in the Techdegree Project Instructions)
 *  3a. Two extra "if statements" were added in order to concatenate to the HTML string the name of the actor (in case the quotation comes from a movie) or the name of the author (in case the quotation comes from a book)
 * 4. Adds to the HTML_text string an "unordered list" containing the tags of each quote object, which will be displayed in upper case.
 * 5. Prints the HTML string in the page 
 * 5. Changes the background color with a transition time of 0.5 s
 * 
 * @returns 
 * 
***/

function printQuote () {
  let quoteObject = {};
  quoteObject = getRandomQuote();
  let HTML_text = `<p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}`;

  if ( quoteObject.tags.includes("movie") ) {
    HTML_text += `<span class="actor">interpreted by ${quoteObject.actor}</span>`;
  }

  if ( Object.keys(quoteObject).includes("citation") ) {
    HTML_text += `<span class="citation">${quoteObject.citation}</span>`;
  }

  if ( quoteObject.tags.includes("book") ) {
    HTML_text += `<span class="author">written by ${quoteObject.author}</span>`;
  }

  if ( Object.keys(quoteObject).includes("year") ) {
    HTML_text += `<span class="year">${quoteObject.year}</span>`;
  } 
  HTML_text += `</p>`;

  HTML_text += `<ul class="tags">`;
  for ( let i = 0; i < quoteObject.tags.length; i++ ) {
    HTML_text += `<li>${ quoteObject.tags[i].toUpperCase() }</li>`;
  }
  HTML_text += `</ul>`;

  document.getElementById('quote-box').innerHTML = HTML_text;   // Printing the HTML string in the page

  /***
   * Changing background color with a transition time of 0.5 seconds.
   * The code to change the CSS style via JavaScrip was learned from these websites: https://dev.to/karataev/set-css-styles-with-javascript-3nl5 and https://www.tutorialrepublic.com/faq/how-to-change-the-background-color-of-a-web-page-using-javascript.php
   * 1. Set an array of 3 randoms numbers from 0 to 255 to to array "rgbArray"
   * 2. Set the background color of the "body" tag to the RGB color corresponding the three elements (indexes 0 to 2) of the array
   * 3. Changes the text color to ensure readability according to the following rule:   
   *    It checks if the generated random RGB color is too bright. I came with a very simple empirical solution to decide if a color is "bright" (after spending a lot of time trying to learn how to calculate complementary natural colors with a formula):
   *    As we have 16,777,216 colors in the RGB color scheme and brighter colors have higher RGB values, I decided to set a "threshold" of 6,000,000 colors that are "dark". 
   *    Any multiplication of the 3 RGB components that is above 6,000,000 will be considered "bright".
   *    If the color is considered "bright", the quote text as well as the button text will change to black.
  ***/
  let rgbArray = getRandomColor();
  document.body.style.background = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;  
  if ( rgbArray[0] * rgbArray[1] * rgbArray[2] > 6000000 ) {
    document.body.style.color = "black";
    document.getElementById('load-quote').style.color = "black";
  } else {
      document.body.style.color = "white";
      document.getElementById('load-quote').style.color = "white";
    }
  document.body.style.transition = "0.5s";
  
  return;
}

/***
 * Adds styles to the CSS file, for the classes "author", "actor" and "tags".
 * The code was learned from the following site given by a given by Techdegree tutor in the Slack community: https://dev.to/karataev/set-css-styles-with-javascript-3nl5
 * The code for styling the ".tags li" class was learned from the following website: https://www.w3schools.com/css/css_font_style.asp
 */

let style = document.createElement('style');
style.innerHTML = `
.author:before {
  content: ", ";
  font-style: normal;
}

.actor:before {
  content: ", ";
  font-style: normal;
}

ul.tags {
  padding: 0px;
  text-align: right;
}

.tags li {
  border-radius: 6px;
  display: inline-block;
  background: #4e4b50;
  color: white;
  padding: 10px 10px;
  margin: 5px;
  font-size: 12px;
  font-weight: bold;
  font-family: sans-serif;
}
`;
document.head.appendChild(style);

// The function printQuote() is one called as soon as the page loads to ensure that the original quote written in the original HTML file is not displayed.
printQuote();

// Auto-refresh quote each 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);