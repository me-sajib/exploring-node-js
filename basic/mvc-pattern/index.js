const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello from express router");
})

app.use((req, res, next) => {
    res.send({
        error: "Router not match"
    })
})

app.listen(PORT, () => {
    console.log("Running port on 4000");
})