const express = require('express');
const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/api", userRoute);
app.use("/api", authRoute);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})
app.use((req, res) => {
    res.send("Don't match any route")
})


module.exports = app;