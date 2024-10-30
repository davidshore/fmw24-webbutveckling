//Steg 1.
alert("Välkommen till hangman. Du ska gissa på bokstäverna i ett slupat ord.");

//Steg 2.
const words = ["javascript", "spel", "hej", "chas"];
let guesses = 0;
let maxGuesses = 6;

// Steg 2.1 Slumpa fram ett ord:
const randomNumber = Math.random(); // Siffra mellan 0 och 0.99999
const randomMultiplied = randomNumber * words.length; // Siffra mellan 0 och t.ex. 3.9999999
const randomPosition = Math.floor(randomMultiplied); // Siffra mellan 0 och 3.

const selectedWord = words[randomPosition];

// Steg 2.2
let hiddenWord = [];
for (let i = 0; i < selectedWord.length; i++) {
  hiddenWord.push("_");
}

alert("Ordet är: " + hiddenWord.join(" "));
// Steg 3
let guess = prompt("Gissa en bokstav");

console.log("guess", guess);

// Steg 4 - ta reda på om bokstaven finns i ordet
const letterExistsInWord = selectedWord.indexOf(guess) != -1;
//const letterExistsInWord2 = selectedWord.includes(guess);

if (letterExistsInWord) {
  for (let i = 0; i < selectedWord.length; i++) {
    let letter = selectedWord[i];
    if (letter == guess) {
      hiddenWord[i] = guess;
    }
  }

  alert("Rätt. Ditt ord: " + hiddenWord.join(" "));
} else {
  guesses++;

  alert(
    "Fel. du har gissat " + guesses + " fel av totalt " + maxGuesses + " försök"
  );
}
