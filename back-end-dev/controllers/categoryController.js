const category = require('../models/category');

// Create new product   =>   /api/v1/admin/product/new
exports.createCategory = async (req, res, next) => {
    let newCategory = new category;
    newCategory = req.body;
    const nCategory = await category.create(newCategory);

    res.status(201).json({
        success: true,
        nCategory
    })
}

exports.getCategory = async (req, res, next) => {
    const tempCategory = await category.find();
    const total = tempCategory.length;
    res.status(201).json({
        success: true,
        total: total,
        tempCategory
    })
}
