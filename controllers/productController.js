const { productModel } = require('../models/index');

module.exports.getAllProducts = async function getAllProducts(req, res) {
    try {
        const products = await productModel.findAll({});
        res.json({
            message: "All products retrieved!",
            data: products
        })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

module.exports.addProduct = async function addProduct(req, res) {
    try {
        if (!req.body.title) {
            res.status(400).json({
                message: "please enter valid details!"
            })
        }
        const newProduct = await productModel.create(req.body);
        res.json({
            message: "product added!",
            data: newProduct
        })

    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}