// Strängar (Strings)

const s1 = "hej";
const s2 = "hej";
const s3 = `hej`; // Backticks (template literals)

// Variabler i strängar
const age = 20;
const myName = "Fred";

const greeting = "Hello, I'm " + age + " years old";
console.log(greeting);

// Med backticks
const greeting2 = `Hello, my name is ${myName}. I'm ${age} years old`;
console.log(greeting2);

// Tecken i strängar
const firstLetter = greeting2[0];
console.log("first letter of greeting2:", firstLetter);

// Length = en property = en egenskap
const numberOfLetters = greeting2.length;
console.log("numberOfLetters", numberOfLetters);

// Plocka ut sista bokstaven
console.log(greeting2[greeting2.length - 1]);

// Sträng-funktioner
const text = "Javascript är roligt";
console.log("upperCase:", text.toUpperCase());

const word = text.substring(0, 10);
console.log("substring:", word);
console.log("substring2:", text.substring(11));

const username = "guest_David";
