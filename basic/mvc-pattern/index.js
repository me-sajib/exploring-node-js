const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/users.route');
const productRoute = require('./routes/products.route');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(userRoute);
app.use(productRoute)

app.use((req, res) => {
    res.send({
        success: "Fail",
        error: "No route match"
    })
})

app.listen(PORT, () => {
    console.log("Running port on 4000");
})