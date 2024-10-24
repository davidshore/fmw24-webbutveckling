const person = {
  name: "Sven",
};

const person2 = person; // Ingen kopia - kallas för referens

// person2.name = "Fred";

//console.log("person name", person.name);

const person3 = { ...person }; // En kopia

person3.name = "Fred";
console.log("person name", person.name);

//Samma men med strängar

let myName = "Sven";

let myName2 = myName; // Kopia

myName2 = "Fred";

console.log("myName", myName);

let myNum = 10;

let myNum2 = myNum; // Kopia

// Kopia av array
const myArr = [1, 2, 3];

const myArr2 = [...myArr]; //Kopia

// Spread med object - uppdatera
const obj = {
  firstName: "Sven",
  age: 50,
  lastName: "Svensson",
};

const obj2 = { ...obj, lastName: "Svensson" };
console.log("obj", obj);
console.log("obj2", obj2);

// Spread med object - uppdatera property

const obj3 = { ...obj, firstName: "Fred", age: 30 };
console.log("obj3", obj3);

//Destructure
// const { firstName, age } = obj;
// console.log("firstName", firstName);
// console.log("age", age);

//Vanliga sättet
const firstName2 = obj.firstName;
const age2 = obj.age;

// Spread med delete - deleta age från obj
const { age, ...rest } = obj;

console.log("age", age);
console.log("rest", rest);

// Spread med arrayer

const arr = [1, 2, 3];

const arr2 = [0, ...arr, 4];

console.log("arrayer", arr, arr2);
const myArrary1 = [1, 2];
const myArrary2 = [3, 4];

const myArray3 = [...myArrary1, ...myArrary2, 5, 6, 7];
console.log("myArray3", myArray3);
