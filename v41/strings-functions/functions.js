function addFive(num) {
  return num + 5;
}

const result = addFive(10);
const result2 = addFive(50);

function fruitJuicer(fruit) {
  return fruit + "-juice";
}

console.log(fruitJuicer("apple"));
console.log(fruitJuicer("orange"));
console.log(fruitJuicer("pineapple"));

function checkAvailability(vadSomHelst) {
  if (vadSomHelst <= 0) {
    return "Varan är slut";
  } else if (vadSomHelst <= 10) {
    return "Det finns få kvar";
  } else {
    return "Det finns mångar kvar";
  }
}

// let tShirtInStock = 5;
// let jeansInStock = 11;

const tshirtText = checkAvailability(5);
console.log("tshirtText", tshirtText);

const jeansText = checkAvailability(11);
console.log("jeansText", jeansText);
