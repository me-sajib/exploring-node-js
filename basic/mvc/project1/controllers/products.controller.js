const { v4: uuidv4 } = require("uuid");
const productsModel = require("../models/products.model");

const createProduct = async (req, res) => {
    try {
        const newProduct = new productsModel({
            id: uuidv4(),
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {

    }

};


module.exports = { createProduct }