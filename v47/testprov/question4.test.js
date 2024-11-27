const updateCarSpeeds = require("./question4"); // Ändra till rätt filnamn

test("updateCarSpeeds ska uppdatera alla bilars hastighet till 100", () => {
  const cars = [
    { type: "Volvo", speed: 50 },
    { type: "Ford", speed: 80 },
    { type: "Opel", speed: 60 },
  ];

  const expected = [
    { type: "Volvo", speed: 100 },
    { type: "Ford", speed: 100 },
    { type: "Opel", speed: 100 },
  ];

  const result = updateCarSpeeds(cars);

  // Kontrollera att alla bilar har speed 100
  expect(result).toEqual(expected);
});
