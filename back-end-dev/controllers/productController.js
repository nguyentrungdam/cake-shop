//const { response } = require('express');
const product = require('../models/product')
const category = require('../models/category');
const mongoose = require('mongoose')

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const pagination = require('../middlewares/pagination');

// Create new product   =>   /api/v1/admin/product/new
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
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
})

exports.getProductList = catchAsyncErrors(async (req, res, next) => {
    const page = req.query.page;
    const total = await product.where({isDelete: false}).countDocuments();
    const Product = await pagination(
        product.find({isDelete: false}).populate("Category"),
        page
    )


    res.status(201).json({
        success: true,
        total: total,
        totalCurrentPage: Product.length,
        Product
    })
})

exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const tempId = req.query.Id;
    const ObjectId = mongoose.Types.ObjectId;
    if (!tempId || !ObjectId.isValid(tempId)) {
        const err = new Error('Id id not valid');
        return next(err);
    }
    const Product = await product.findById(tempId).populate("Category");
    if (!Product || Product.isDelete == true) {
        const err = new Error('Product not found');
        return next(err);
    }
    res.status(201).json({
        success: true,
        Product
    })
})

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    // Validate Id
    const tempId = req.body.Id;
    const ObjectId = mongoose.Types.ObjectId;
    if (!tempId || !ObjectId.isValid(tempId)) {
        const err = new Error('Id id not valid');
        return next(err);
    }

    // Check product exists in database
    const oldProduct = await product.findById(tempId);
    if (!oldProduct || oldProduct.isDelete == true) {
        const err = new Error('Product not found');
        return next(err);
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
    }).populate("Category");
    
    res.json({
        success: true,
        message: 'Product updated',
        Product
    })
})

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const tempId = req.query.Id;
    const ObjectId = mongoose.Types.ObjectId;
    if (!tempId || !ObjectId.isValid(tempId)) {
        const err = new Error('Id id not valid');
        return next(err);
    }

    let tempProduct = await product.findById(tempId).populate("Category");
    if (!tempProduct || tempProduct.isDelete == true) {
        const err = new Error('Product not found');
        return next(err);
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
})

exports.searchProduct = catchAsyncErrors(async (req, res, next) => {
    const tempKeyword = req.query.Keyword;
    const page = req.query.page;

    // Set keyword
    const Keyword = tempKeyword ? {
        $or: [
            {
                Name: {
                    $regex: tempKeyword,
                    $options: 'i'
                }
                
            },
            {
                Description: {
                    $regex: tempKeyword,
                    $options: 'i'
                },
            }
        ]
        
    } : {}
    
    const total = await product.where({ ...Keyword }).countDocuments();
    const Product = await pagination(
        product.find({ ...Keyword }).populate("Category"),
        page
    )

    res.status(201).json({
        success: true,
        total: total,
        totalCurrentPage: Product.length,
        Product
    })
})

exports.filterProduct = catchAsyncErrors(async (req, res, next) => {
    const nameCategory = req.query.Category;
    const page = req.query.page;

    // find category id
    const tempCategory = await category.findOne({ Name: nameCategory });
    if (!tempCategory) {
        const err = new Error('Category not found');
        return next(err);
    }

    const nameSort = req.query.Sort || '';

    let Product;
    let total;
    const tempSort = ['nameasc', 'namedesc', 'priceasc', 'pricedesc']
    if (tempSort.includes(nameSort.toLowerCase())) {
        // Set field and sort name
        let field = 'Name';
        let sort = nameSort.slice(4, nameSort.length);
        if (nameSort.slice(0, 5).toLowerCase() == 'price') {
            field = 'Price';
            sort = nameSort.slice(5, nameSort.length);
        }

        total = await product.where({ Category: tempCategory}).countDocuments();
        // filter and sort products
        Product = await pagination(
            product.find({ Category: tempCategory}).sort([[ field, sort]]).populate("Category"),
            page
        )
    }
    else {
        total = await product.find({ Category: tempCategory}).countDocuments();
        Product = await pagination(
            product.find({ Category: tempCategory}).populate("Category"),
            page
        )
    }
    
    res.status(201).json({
        success: true,
        total: total,
        totalCurrentPage: Product.length,
        Product
    })
})