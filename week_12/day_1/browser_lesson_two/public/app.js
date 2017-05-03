// var app = function() {

// // 1. create a parent container
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

// // 2. create first child container
//   var bq = document.createElement('blockquote');
//   bq.innerText = "This is a quote. ";

// // 3. create child of first child
//   var quotee = document.createElement('cite');
//   quotee.innerText = 'Myself';

// // 4. append blockquote to child.
//    bq.appendChild(quotee);
//    quoteArticle.appendChild(bq);

// // 5. add everything to the quote list. 
//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);
// };

var createQuoteArticle = function(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  return quoteArticle;
};

var createBlockQuote = function(quote){
  var blockquote = document.createElement('blockquote');
  blockquote.innerText = quote;
  return blockquote;
};

var createCite = function(author){
   var cite = document.createElement('cite');
   cite.innerText = author;
   return cite;
};

var appendElements = function(quotes, quoteArticle, blockquote, cite){
  blockquote.appendChild(cite);
  quoteArticle.appendChild(blockquote);
  quotes.appendChild(quoteArticle);
};

var appendElements = function(quote, quoteArticle, blockquote, cite){
// ASK john how to look through each argument.
};

var addQuote = function(quote, author){
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(quote);
  var cite = createCite(author);
  var quotes = document.querySelector('#quotes');
  appendElements(quotes, quoteArticle, blockquote, cite);
};

var quotesArray = [
  {quote: "Willy nilly ", author: "John"},
  {quote: "ahhhhHHHHhhhHH ", author: "John Daly"},
  {quote: "Jam ", author: "Keir"}, 
  {quote: "Quote ", author: "Arlene"}
];

var app = function(){
  quotesArray.forEach(function(quote){
    addQuote(quote.quote, quote.author);
  });
};

window.onload = app;
