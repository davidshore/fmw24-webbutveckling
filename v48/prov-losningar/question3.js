// 3. Filtrera namn (2p)
// Skriv en funktion, filter names, som tar en array med namn och en bokstav
// som input och returnerar en ny array med de namn som börjar med bokstaven.
// funktionen behöver bara hantera en stor bokstav som input

// Exempel:
// filterNames(["John", "Mary", "Peter", "Jane"], "J") // Returnerar ["John", "Jane"]
// filterNames(["John", "Mary", "Peter", "Jane"], "P") // Returnerar ["Peter"]
// filterNames(["John", "Mary", "Peter", "Jane"], "X") // Returnerar []

// filter - behåll element i arrayen med att returnera true

function filterNames(names, letter) {
  // Din kod här

  const filteredNames = names.filter((name) => {
    return name[0] == letter;
  });

  return filteredNames;
}

console.log("filterNames", filterNames(["John", "Mary", "Peter", "Jane"], "J"));

module.exports = filterNames;
