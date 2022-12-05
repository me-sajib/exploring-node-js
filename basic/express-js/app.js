const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users.route");
const adminRoute = require("./routes/admin.route");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h2>hello express</h2>");
});

// show login page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// post login data get and show
app.post("/login", (req, res) => {
  const name = req.body.name;

  res.send(`<h1>Hey ${name}</h1>`);
});

// user route
app.use("/api/user", userRoute);

// admin route
app.use("/api/admin", adminRoute);

// if any bad url send show 404 msg
app.use((req, res) => {
  res.status(404).send("Bad request send");
});

module.exports = app;
