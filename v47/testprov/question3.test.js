const filterEvenNumbers = require("./question3");

test("filterEvenNumbers ska returnera bara jämna tal", () => {
  expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
  expect(filterEvenNumbers([10, 15, 20])).toEqual([10, 20]);
});
