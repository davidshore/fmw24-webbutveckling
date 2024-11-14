const { sum, reverse } = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("reverses array", () => {
  const result = reverse([1, 2, 3]);

  expect(result[0]).toBe(3);
  expect(result[2]).toBe(1);

  expect(result).toEqual([3, 2, 1]);
});
