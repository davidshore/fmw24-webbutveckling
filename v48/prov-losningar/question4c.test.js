const getBookInfo = require("./question4c");

describe("getBookInfo", () => {
  test("returnerar titel och författare med rätt format", () => {
    const book = {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    };
    const result = getBookInfo(book);

    expect(result).toBe("Titel: To Kill a Mockingbird, Författare: Harper Lee");
  });
});
