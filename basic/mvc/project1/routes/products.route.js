const { createProduct } = require('../controllers/products.controller');

const router = require('express').Router();

router.post("/", createProduct)


module.exports = router;