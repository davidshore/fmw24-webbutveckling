const addDiscount = require("./question4a");

describe("addDiscount", () => {
  test("lägger till rabatt som en ny egenskap i objektet", () => {
    const product = { name: "Laptop", price: 15000, brand: "TechBrand" };
    const result = addDiscount(product, 10);

    expect(result).toEqual({
      name: "Laptop",
      price: 15000,
      brand: "TechBrand",
      discount: 10,
    });

    // Kontrollera att originalobjektet inte ändras
    expect(product).toEqual({
      name: "Laptop",
      price: 15000,
      brand: "TechBrand",
    });
  });
});
