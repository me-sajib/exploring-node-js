const path = require('path');
const { allProducts } = require('../models/products.model');


exports.getProduct = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/product.html"));
}

exports.saveProduct = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    allProducts.push({ name, price });
    res.status(200).send({
        status: "Success",
        allProducts
    })
}
