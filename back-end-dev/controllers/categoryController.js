const category = require('../models/category');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create new product   =>   /api/v1/admin/product/new
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
    let newCategory = new category;
    newCategory = req.body;
    const Category = await category.create(newCategory);

    res.status(201).json({
        success: true,
        Category
    })
})

exports.getCategoryList = catchAsyncErrors(async (req, res, next) => {
    const Category = await category.find();
    const total = Category.length;
    res.status(201).json({
        success: true,
        total: total,
        Category
    })
})
