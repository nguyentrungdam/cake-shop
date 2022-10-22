const product = require('../models/product')

// Create new product   =>   /api/v1/admin/product/new
exports.createProduct = async (req, res, next) => {
    let newProduct = new product;
    newProduct = req.body;
    newProduct.Image = {
        Public_Id: req.file.filename,
        Url: req.file.path
    };
    const nProduct = await product.create(newProduct);

    res.status(201).json({
        success: true,
        nProduct
    })
}

exports.getProduct = async (req, res, next) => {
    const tempProduct = await product.find().populate("Category");
    const total = tempProduct.length;
    res.status(201).json({
        success: true,
        total: total,
        tempProduct
    })
}
