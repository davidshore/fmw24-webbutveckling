//Steg 1.
alert("Välkommen till hangman. Du ska gissa på bokstäverna i ett slupat ord.");

//Steg 2.
const words = ["javascript", "spel", "hej", "chas"];
let guesses = 0;
let maxGuesses = 6;
const guessedLetters = [];
let hiddenWord = [];

// Svar på om jag har gissat förut på denna bokstav
// Svara true eller false.
function hasGuessedLetter(letter) {
  for (let i = 0; i < guessedLetters.length; i++) {
    if (letter == guessedLetters[i]) {
      return true;
    }
  }

  return false;
}

// Svara på frågan finns det några underscrores i hiddenWord? true eller false?
function hasUnderscores() {
  for (let i = 0; i < hiddenWord.length; i++) {
    if (hiddenWord[i] == "_") {
      return true;
    }
  }
  return false;
}

// Steg 2.1 Slumpa fram ett ord:
const randomNumber = Math.random(); // Siffra mellan 0 och 0.99999
const randomMultiplied = randomNumber * words.length; // Siffra mellan 0 och t.ex. 3.9999999
const randomPosition = Math.floor(randomMultiplied); // Siffra mellan 0 och 3.

const selectedWord = words[randomPosition];

// Steg 2.2

for (let i = 0; i < selectedWord.length; i++) {
  hiddenWord.push("_");
}

let didLose = false;
let didWin = false;

while (!didLose && !didWin) {
  alert("Ordet är: " + hiddenWord.join(" ")); // join tar en array och omvandlar
  // till sträng och lägger given sträng mellan varje värde. "_" + " " +  ...

  // Steg 3
  let guess = prompt("Gissa en bokstav");

  const letterTaken = hasGuessedLetter(guess);

  if (letterTaken) {
    alert("Bokstaven är redan tagen");
  } else {
    guessedLetters.push(guess);

    // Steg 4 - ta reda på om bokstaven finns i ordet
    const letterExistsInWord = selectedWord.indexOf(guess) != -1;
    //const letterExistsInWord2 = selectedWord.includes(guess);

    if (letterExistsInWord) {
      for (let i = 0; i < selectedWord.length; i++) {
        //let letter = selectedWord[i];
        if (selectedWord[i] == guess) {
          hiddenWord[i] = guess;
        }
      }

      alert("Rätt. Ditt ord: " + hiddenWord.join(" "));
    } else {
      guesses++;

      alert(
        "Fel. du har gissat " +
          guesses +
          " fel av totalt " +
          maxGuesses +
          " försök"
      );
    }

    didLose = guesses == maxGuesses;
    didWin = !hasUnderscores();
  }
}

if (didWin) {
  alert("Du vann");
} else {
  alert("Du förlorade");
}
