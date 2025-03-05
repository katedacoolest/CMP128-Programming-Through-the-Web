let quotes = [
  "Nothing is impossible, the word itself says 'I'm possible': Audrey Hepburn",
  "Keep your face always toward the sunshine - and shadows will fall behind you: Walt Whitman",
  "With the new day comes new strength and new thoughts: Eleanor Roosevelt"
];

function newQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);  
  let myQuote = quotes[randomQuote]; 
  let quoteDivElement = document.getElementById("myQuote");  
  quoteDivElement.innerHTML = myQuote;  
}
