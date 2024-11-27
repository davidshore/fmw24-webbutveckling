// 4b: Uppdatera egenskaper med Spread Operator (2p)
// Skriv en funktion updatePriceWithDiscount som tar emot två parametrar:
// ett produktobjekt och en rabattprocent. Funktionen ska returnera ett nytt objekt
// där priset är uppdaterat med den givna rabattprocenten

const product2 = {
  name: "Laptop",
  price: 15000,
  brand: "TechBrand",
};

function updatePriceWithDiscount(product, discount) {
  // Din kod här
}

// console.log(updatePriceWithDiscount(product2, 10));
// Output: { name: "Laptop", price: 13500, brand: "TechBrand" }
// Uträkning: ((100 - discount)/100) * price = rabbaterat pris

module.exports = updatePriceWithDiscount;
