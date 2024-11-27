const canGetDrivingLicense = require("./question1"); // Ändra till rätt filnamn

test("canGetDrivingLicense ska returnera rätt meddelande beroende på ålder", () => {
  expect(canGetDrivingLicense(15)).toBe("För ung för att köra bil");
  expect(canGetDrivingLicense(16)).toBe("Kan övningsköra");
  expect(canGetDrivingLicense(17)).toBe("Kan övningsköra");
  expect(canGetDrivingLicense(18)).toBe("Kan få körkort");
  expect(canGetDrivingLicense(25)).toBe("Kan få körkort");
});
