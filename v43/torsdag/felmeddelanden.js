// syntax fel;
const obj = { name: "Fred" };

// Läs fel
let obj2 = {
  // firstName: "Sven",
};

console.log(obj2.firstName);

let arr = [];

arr.forEach((item) => console.log(item));

// initialisera efteråt
// console.log(myVar);

// let myVar = "hej";

// Använda frågetecken

let person = {
  firstName: "Sven",
  // location: { lat: 55637, long: 7674894 },
};

console.log(person?.location?.lat);
