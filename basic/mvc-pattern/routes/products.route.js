const router = require('express').Router();
const { getProduct, saveProduct } = require('../controllers/products.controller');

router.get("/products", getProduct);
router.post("/product", saveProduct);

module.exports = router;