const express = require("express");
const userRoute = require("./routes/users.route");
const adminRoute = require("./routes/admin.route");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>hello express</h2>");
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
