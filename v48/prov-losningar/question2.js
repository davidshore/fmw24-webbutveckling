// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

let str1 = "detsamma";
let str2 = "detta";

str1[7] == str2[7]; // "a" == undefined

function equalLetterPositions(str1, str2) {
  // Din kod här
  let sum = 0;

  let shortest = str1.length;
  if (str2.length < str1.length) {
    shortest = str2.length;
  }

  // loop
  for (let i = 0; i < shortest; i++) {
    if (str1[i].toLowerCase() == str2[i].toLowerCase()) {
      sum += 1;
    }
  }

  return sum;
}

console.log("equalLetterPositions", equalLetterPositions("go", "DO"));

module.exports = equalLetterPositions;
