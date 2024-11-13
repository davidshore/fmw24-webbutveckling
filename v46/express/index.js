import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

// Router - Koppla en sökväg (kallas endpoint eller route) til en funktion

// Skicka vanlig text
app.get("/test", (req, res) => {
  res.send("test");
});

// Skicka json data
app.get("/json-test", (req, res) => {
  const myObj = { test: "hej" };

  res.json(myObj);
});

const todolist = [];

// Ta emot data från användaren
app.post("/todos", (req, res) => {
  const data = req.body;

  todolist.push(data);
  console.log("in todolist: ", todolist);

  res.send();
});

app.listen(4002, () => {
  console.log("listening on 4002");
});
