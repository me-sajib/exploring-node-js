const app = require("./app");
const config = require("./config/config");
const PORT = config.app.port;
const usersRoute = require('./routes/users.route');
const productsRoute = require("./routes/products.route");

app.use("/users", usersRoute);
app.use("/product", productsRoute)

app.use("/", (req, res) => {
    res.send("<h1>home routes</h1>");
});


app.listen(PORT, () => {
    console.log("Running " + PORT);
})