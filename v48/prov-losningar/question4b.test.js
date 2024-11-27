const updatePriceWithDiscount = require("./question4b");

describe("updatePriceWithDiscount", () => {
  test("uppdaterar priset med rabatt och returnerar ett nytt objekt", () => {
    const product = { name: "Laptop", price: 15000, brand: "TechBrand" };
    const result = updatePriceWithDiscount(product, 10);

    expect(result).toEqual({
      name: "Laptop",
      price: 13500, // 10% rabatt på 15000
      brand: "TechBrand",
    });

    // Kontrollera att originalobjektet inte ändras
    expect(product).toEqual({
      name: "Laptop",
      price: 15000,
      brand: "TechBrand",
    });
  });
});
