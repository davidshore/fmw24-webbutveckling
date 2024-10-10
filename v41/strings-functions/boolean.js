// Boolean = sant eller falskt - Används för jämnförelser
debugger;
let myBool = true;
myBool = false;

// Jämnförelser
const stock = 0;

const isInStock = stock > 0;
const isOutOfStock = stock == 0;
console.log("isInStock", isInStock);
console.log("isOutOfStock", isOutOfStock);

const hasLimitedStock = stock > 0 && stock <= 10; // 0 till och med 10
const hasLimitedStock2 = stock > 0 && stock < 10; // 0 till och med 9

const isOutOfStockOrBackorder = stock == 0 || stock < 0; // Slut i lager eller minus lager
const isOutOfStockOrBackorder2 = stock <= 0; // samma som ovan

// trippel likamed - måste ha samma typ
const result = "0" == 0;
console.log("result", result);
const result2 = "0" === 0;
console.log("result2", result2);

// if else - ta olika vägar i koden

if (isInStock) {
  console.log("Produkten finns i lager");
} else {
  console.log("Produkten finns inte i lager");
}
