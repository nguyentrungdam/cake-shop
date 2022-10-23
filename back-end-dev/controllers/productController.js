const { response } = require('express');
const product = require('../models/product')
const mongoose = require('mongoose')

// Create new product   =>   /api/v1/admin/product/new
exports.createProduct = async (req, res, next) => {
    let newProduct = new product;
    newProduct = req.body;
    newProduct.Image = {
        Public_Id: req.file.filename,
        Url: req.file.path
    };
    const Product = await product.create(newProduct);

    res.status(201).json({
        success: true,
        Product
    })
}

exports.getProductList = async (req, res, next) => {
    const Product = await product.find({isDelete: false}).populate("Category");
    const total = Product.length;
    res.status(201).json({
        success: true,
        total: total,
        Product
    })
}

exports.getProductById = async (req, res, next) => {
    const tempId = req.query.Id;
    const ObjectId = mongoose.Types.ObjectId;
    if (!tempId || !ObjectId.isValid(tempId)) {
        return res.json({
            success: false,
            message: 'Id is not valid'
        })
    }
    const Product = await product.findById(tempId).populate("Category");
    if (!Product || Product.isDelete == true) {
        return res.json({
            success: false,
            message: 'Not found product'
        })
    }
    res.status(201).json({
        success: true,
        Product
    })
}

exports.updateProduct = async (req, res, next) => {
    // Validate Id
    const tempId = req.body.Id;
    const ObjectId = mongoose.Types.ObjectId;
    if (!tempId || !ObjectId.isValid(tempId)) {
        return res.json({
            success: false,
            message: 'Id is not valid'
        })
    }

    // Check product exists in database
    const oldProduct = await product.findById(tempId);
    if (!oldProduct || oldProduct.isDelete == true) {
        return res.json({
            success: false,
            message: 'Product not found'
        })
    }

    // Create template product
    const tempProduct = {
        Name: req.body.Name || oldProduct.Name,
        Description: req.body.Description || oldProduct.Description,
        Price: req.body.Price || oldProduct.Price,
        Quantity: req.body.Quantity || oldProduct.Quantity,
        Category: req.body.Category || oldProduct.Category,
        Size: req.body.Size || oldProduct.Size,
    }

    // Update product
    const Product = await product.findByIdAndUpdate(tempId, tempProduct, {
        new: true,
        runValidators: true,
        useFindAndModified: false
    });
    
    res.json({
        success: true,
        message: 'Product updated',
        Product
    })
}

exports.deleteProduct = async (req, res, next) => {
    const tempId = req.query.Id;
    const ObjectId = mongoose.Types.ObjectId;
    if (!tempId || !ObjectId.isValid(tempId)) {
        return res.json({
            success: false,
            message: 'Id is not valid'
        })
    }

    let tempProduct = await product.findById(tempId).populate("Category");
    if (!tempProduct || tempProduct.isDelete == true) {
        return res.json({
            success: false,
            message: 'Not found product'
        })
    }

    tempProduct = {
        isDelete: true,
    }
    const newProduct = await product.findByIdAndUpdate(tempId, tempProduct, {
        new: true,
        runValidators: true,
        useFindAndModified: false
    });

    res.status(201).json({
        success: true,
        message: 'Product deleted'
    })
}