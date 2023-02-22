const express = require('express');
const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth.route");
const app = express();



app.use("/", (req, res) => {
    res.send("I'm the get Home route")
})

app.use("/api", userRoute);
app.use("/api", authRoute);


module.exports = app;