
const mongoose = require('mongoose')

const catchAsyncErrors = require('../utils/catchAsyncErrors');
const pagination = require('../utils/pagination');
const logOrderDetail = require('../models/logOrderDetail');
const account = require('../models/account');
const order = require('../models/order');
const product = require('../models/product');
const orderDetail = require('../models/orderDetail');

exports.getProductInCart = catchAsyncErrors(async (req, res, next) => {
    //get data
    const tempAccount = req.Account;

    const LogOrderDetail = await logOrderDetail.find({ Account: tempAccount._id, isDelete: 0 }).populate("Product");
    const total = LogOrderDetail.length;

    res.status(201).json({
        success: true,
        total: total,
        LogOrderDetail
    })
})

exports.addOrder = catchAsyncErrors(async (req, res, next) => {
    //get data
    const tempAccount = req.Account;
    
    // check order with account and status
    let tempOrder = await order.findOne({ Account: tempAccount._id, Order_Status: 'await', isDelete: 0});
    if (!tempOrder) {
        const err = new Error('An error in process ordering');
        err.name = 'Cart Empty';
        return next(err);
    }

    // check product in cart
    const tempLogOrderDetail = await logOrderDetail.find({ 
        Order: tempOrder._id, 
        //Account: tempAccount._id, // Use for advanced ordering feature
        isDelete: 0 
    }).cursor();

    if (!tempLogOrderDetail) {
        const err = new Error('Cart empty');
        return next(err);
    }

    // Check quantity product in warehouse
    // let tempProduct;
    // await tempLogOrderDetail.eachAsync(async function(doc) {
    //     tempProduct = await product.find({ _id: doc.Product, isDelete: 0});
    //     if (!tempProduct) {
    //         const err = new Error('Product not found');
    //         return next(err);
    //     }
    //     if (tempProduct.Quantity < doc.Quantity) {
    //         const err = new Error('Not enough product quantity');
    //         return next(err);
    //     }
    // });

    // Insert product into model order detail
    // Delete product in log model order detail
    let tempProduct;
    let tempOrderDetail;
    let OrderDetail;
    await tempLogOrderDetail.eachAsync(async function(doc) {
        tempOrderDetail = new orderDetail;
        tempOrderDetail.Order = doc.Order;
        tempOrderDetail.Product = doc.Product;
        tempOrderDetail.Price = doc.Product.Price;
        tempOrderDetail.Quantity = doc.Quantity;
        tempOrderDetail.Product_Size = doc.Product_Size;

        OrderDetail = await orderDetail.create(tempOrderDetail);

        // Delete product in model log detail order
        doc.isDelete = 1;
        await doc.save();

        // Update product quantity in model product
        tempProduct = await product.findOne({ _id: doc.Product, isDelete: 0});
        console.log('product: ', tempProduct);
        console.log('quantity: ', doc.Quantity);
        tempProduct.Quantity -= doc.Quantity;
        console.log('product 2: ', tempProduct);
        await tempProduct.save();
    });

    // Update order status in model order
    tempOrder.Order_Status = 'order';
    await tempOrder.save();

    res.status(201).json({
        success: true,
        OrderDetail
    })
})

exports.addToCart = catchAsyncErrors(async (req, res, next) => {
    //get data
    const tempAccount = req.Account;
    const { Product, Quantity, Product_Size } = req.body;

    //validate product id
    const ObjectId = mongoose.Types.ObjectId;
    if (!Product || !ObjectId.isValid(Product)) {
        const err = new Error('Product id not valid');
        return next(err);
    }

    //check product
    const tempProduct = await product.findById(Product);
    if (!tempProduct || tempProduct.isDelete == true) {
        const err = new Error('Product not found');
        return next(err);
    }

    //check order with account
    let tempOrder = await order.findOne({ Account: tempAccount._id, Order_Status: 'await', isDelete: 0});
    if (!tempOrder) {
        tempOrder = new order;
        tempOrder = {
            Account: tempAccount._id
        }
        tempOrder = await order.create(tempOrder);
    }

    //check product in cart
    let LogOrderDetail;
    let tempLogOrderDetail = await logOrderDetail.findOne({ 
        Order: tempOrder._id, 
        Product: Product, 
        Product_Size: Product_Size ,
        isDelete: 0 
    })
    if (!tempLogOrderDetail) {
        //if not exist product in cart -> create product in cart
        tempLogOrderDetail = new logOrderDetail;
        tempLogOrderDetail = {
            Order: tempOrder._id,
            Product: Product,
            Account: tempAccount._id,
            Quantity: Quantity,
            Product_Size: Product_Size
        }
        LogOrderDetail = await logOrderDetail.create(tempLogOrderDetail);
    }
    else {
        // if exist product in cart -> update quantity
        tempLogOrderDetail.Quantity += Quantity;
        LogOrderDetail = await tempLogOrderDetail.save();
    }

    res.status(201).json({
        success: true,
        LogOrderDetail
    })
})

exports.totalSales = catchAsyncErrors(async (req, res, next) => {
    const totalSales = await Order.aggregate([
        {
            $match: {
                isDelete: 0
            }
        },
        { $group: {
            _id: null,
            totalSales: {
                $sum: Amount
            }
        }}
    ])

    if (!totalSales) {
        const err = new Error('The order sales cannot be generated');
        return next(err);
    }

    res.status(201).json({
        success: true,
        totalSales: totalSales
    })
})


