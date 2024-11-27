const filterNames = require("./question3");

test("filterNames filters names that start with a given letter", () => {
  const names = ["Alice", "Bob", "Anna", "Charlie", "Adam"];

  expect(filterNames(names, "A")).toEqual(["Alice", "Anna", "Adam"]);
  expect(filterNames(names, "B")).toEqual(["Bob"]);
  expect(filterNames(names, "C")).toEqual(["Charlie"]);
  expect(filterNames(names, "Z")).toEqual([]);
});
