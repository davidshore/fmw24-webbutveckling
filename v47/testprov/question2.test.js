const capitalizeFirstLetters = require("./question2"); // Ändra till rätt filnamn

test("capitalizeFirstLetters ska göra varje ords första bokstav till stor", () => {
  expect(capitalizeFirstLetters("webbutveckling är kul")).toBe(
    "Webbutveckling Är Kul"
  );
  expect(capitalizeFirstLetters("hello world")).toBe("Hello World");
});
