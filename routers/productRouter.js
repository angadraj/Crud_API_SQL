const express = require('express');
const productRouter = express.Router();
const { getAllProducts, addProduct } = require('../controllers/productController');

productRouter.route('/')
.get(getAllProducts);

productRouter.route('/add')
.post(function(req, res) {
    addProduct(req, res);
})

module.exports = productRouter;