import http from "http";

// Request = info från användaren
// Response = Används för att skicka tillbaka data

const app = http.createServer((req, res) => {
  res.write("hello world2");
  res.end();
});

app.listen(4000, () => {
  console.log("server started listening on port 4000");
});
