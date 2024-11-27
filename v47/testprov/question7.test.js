const generateRandomNumbers = require("./question7");

test("generateRandomNumbers ska generera 10 nummer inom rätt intervall", () => {
  const numbers = generateRandomNumbers(1, 10);
  expect(numbers.length).toBe(10);
  expect(Math.min(...numbers)).toBeGreaterThanOrEqual(1);
  expect(Math.max(...numbers)).toBeLessThanOrEqual(10);
});
