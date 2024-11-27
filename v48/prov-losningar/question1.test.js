const totalTax = require("./question1");

test("should calculate the correct total congestion tax for a list of cars", () => {
  const taxedCars = [
    { registrationNumber: "TUU893", time: "6:30" }, // 30 kr
    { registrationNumber: "YNK023", time: "7:10" }, // 45 kr
    { registrationNumber: "BHN113", time: "8:30" }, // 30 kr
    { registrationNumber: "LOP733", time: "18:02" }, // 20 kr
    { registrationNumber: "MGY803", time: "23:30" }, // 0 kr (gratis)
  ];
  const result = totalTax(taxedCars);
  expect(result).toBe(125); // 30 + 45 + 30 + 20 + 0
});
