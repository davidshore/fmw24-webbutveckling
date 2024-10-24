// Hur datorn tolkar värden som sant eller falskt

if ("") {
  console.log("empty string is thruthy");
} else {
  console.log("empty string is falsy");
}

let product;
// Används ofta för att kolla om något finns
if (product) {
  console.log(product.title);
}

// Alla värden som är falsy:

const emptyString = "";
const tomt = undefined;
const tomt2 = null;
const nolla = 0;

const myVar = false;
