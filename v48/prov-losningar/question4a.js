// 4a: Lägg till egenskaper med Spread Operator (2p)
// Skap en funktion addDiscount som tar emot två parametrar: ett produktobjekt och en rabattprocent.
// Funktionen ska returnera ett nytt objekt med discount som ny property.

const product = {
  name: "Laptop",
  price: 15000,
  brand: "TechBrand",
};

// console.log(addDiscount(product, 10));
// Output: { name: "Laptop", price: 15000, brand: "TechBrand", discount: 10 }

function addDiscount(product, discount) {
  // Din kod här
  return { ...product, discount };
}

module.exports = addDiscount;
