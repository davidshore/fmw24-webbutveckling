const equalLetterPositions = require("./question2"); // Ändra till rätt filnamn

test("equalLetterPositions calculates the correct number of matching letter positions", () => {
  // Testfall 1: Olika strängar med en matchning
  expect(equalLetterPositions("go", "DO")).toBe(1); // o och O matchar

  // Testfall 2: Två olika strängar med en matchande position
  expect(equalLetterPositions("hello", "world")).toBe(1); // l på samma position

  // Testfall 3: Olika strängar med flera matchningar
  expect(equalLetterPositions("detsamma", "detta")).toBe(4); // d, e, t, a matchar på samma position

  // Testfall 4: Helt olika strängar utan matchning
  expect(equalLetterPositions("abc", "xyz")).toBe(0);

  // Testfall 5: Identiska strängar
  expect(equalLetterPositions("abc", "ABC")).toBe(3); // Alla positioner matchar
});
