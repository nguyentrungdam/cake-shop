const mongoose = require("mongoose");
//const { startSession } = require('mongoose')

const catchAsyncErrors = require("../utils/catchAsyncErrors");
const pagination = require("../utils/pagination");
const logOrderDetail = require("../models/logOrderDetail");
const account = require("../models/account");
const order = require("../models/order");
const product = require("../models/product");
const orderDetail = require("../models/orderDetail");

exports.getProductInCart = catchAsyncErrors(async (req, res, next) => {
  //get data
  const tempAccount = req.Account;

  const LogOrderDetail = await logOrderDetail
    .find({ Account: tempAccount._id, isDelete: 0 })
    .populate("Product");
  const total = LogOrderDetail.length;

  //console.log('quantity: ', LogOrderDetail[0].Product.Quantity);

  res.status(201).json({
    success: true,
    total: total,
    LogOrderDetail,
  });
});

exports.addOrder = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const pointTransaction = { session };

  //get data
  const tempAccount = req.Account;

  // check order with account and status
  let tempOrder = await order.findOne({
    Account: tempAccount._id,
    Order_Status: "await",
    isDelete: 0,
  });
  if (!tempOrder) {
    const err = new Error("An error in process ordering");
    err.name = "Cart Empty";
    return next(err);
  }

  // check product in cart
  const tempLogOrderDetail = await logOrderDetail.find({
    Order: tempOrder._id,
    //Account: tempAccount._id, // Use for advanced ordering feature
    isDelete: 0,
  });

  if (!tempLogOrderDetail) {
    const err = new Error("Cart empty");
    return next(err);
  }

  // Insert product into model order detail
  // Delete product in model log order detail
  let tempProduct;
  let tempOrderDetail;
  let OrderDetail;
  let Product;
  let Order;
  let totalPrice = 0;
  for (var i = 0; i < tempLogOrderDetail.length; i++) {
    tempProduct = await product.findOne({
      _id: tempLogOrderDetail[i].Product,
      isDelete: 0,
    });
    if (!tempProduct) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found");
      return next(err);
    }
    if (tempProduct.Quantity < tempLogOrderDetail[i].Quantity) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Not enough product quantity");
      return next(err);
    }

    tempOrderDetail = new orderDetail();
    tempOrderDetail.Order = tempLogOrderDetail[i].Order;
    tempOrderDetail.Product = tempLogOrderDetail[i].Product;
    tempOrderDetail.Price = tempProduct.Price;
    tempOrderDetail.Quantity = tempLogOrderDetail[i].Quantity;
    tempOrderDetail.Product_Size = tempLogOrderDetail[i].Product_Size;

    OrderDetail = await orderDetail.create([tempOrderDetail], pointTransaction);

    // Delete product in model log detail order
    tempLogOrderDetail[i].isDelete = 1;
    Product = await tempLogOrderDetail[i].save(pointTransaction);

    // TOTAL price order
    totalPrice += tempProduct.Price;

    // UPDATE product quantity
    tempProduct.Quantity -= tempLogOrderDetail[i].Quantity;
    Order = await tempProduct.save(pointTransaction);
  }

  // Update order status in model order
  tempOrder.Amount = totalPrice;
  tempOrder.Order_Status = "order";
  tempOrder.Order_Date = Date.now();
  tempOrder.Modified_At = Date.now();
  Order = await tempOrder.save(pointTransaction);

  await session.commitTransaction();
  session.endSession();

  res.status(201).json({
    success: true,
    Order,
  });
});

exports.addToCart = catchAsyncErrors(async (req, res, next) => {
  //get data
  const tempAccount = req.Account;
  const { Product, Quantity, Product_Size } = req.body;

  //validate product id
  console.log(req.body);
  const ObjectId = mongoose.Types.ObjectId;
  if (!Product || !ObjectId.isValid(Product)) {
    const err = new Error("Product id not valid");
    return next(err);
  }

  //check product
  const tempProduct = await product.findById(Product);
  if (!tempProduct || tempProduct.isDelete == true) {
    const err = new Error("Product not found");
    return next(err);
  }

  //check order with account
  let tempOrder = await order.findOne({
    Account: tempAccount._id,
    Order_Status: "await",
    isDelete: 0,
  });
  if (!tempOrder) {
    tempOrder = new order();
    tempOrder = {
      Account: tempAccount._id,
    };
    tempOrder = await order.create(tempOrder);
  }

  //check product in cart
  let LogOrderDetail;
  let tempLogOrderDetail = await logOrderDetail.findOne({
    Order: tempOrder._id,
    Product: Product,
    Product_Size: Product_Size,
    isDelete: 0,
  });
  if (!tempLogOrderDetail) {
    //if not exist product in cart -> create product in cart
    tempLogOrderDetail = new logOrderDetail();
    tempLogOrderDetail = {
      Order: tempOrder._id,
      Product: Product,
      Account: tempAccount._id,
      Quantity: Quantity,
      Product_Size: Product_Size,
    };
    LogOrderDetail = await logOrderDetail.create(tempLogOrderDetail);
  } else {
    // if exist product in cart -> update quantity
    tempLogOrderDetail.Quantity += Quantity;
    LogOrderDetail = await tempLogOrderDetail.save();
  }

  res.status(201).json({
    success: true,
    LogOrderDetail,
  });
});

exports.getOrderList = catchAsyncErrors(async (req, res, next) => {
  const orderStatus = ["order", "delivering", "done"];
  const Order = await order.find({ Order_Status: orderStatus });
  const total = Order.length;

  res.status(201).json({
    success: true,
    total: total,
    Order,
  });
});

exports.getOrderById = catchAsyncErrors(async (req, res, next) => {
  // GET data
  const Id = req.query.Id;
  const ObjectId = mongoose.Types.ObjectId;
  if (!Id || !ObjectId.isValid(Id)) {
    const err = new Error("Id id not valid");
    return next(err);
  }

  const Order = await order.findById(Id);
  if (!Order) {
    const err = new Error("Order not found");
    return next(err);
  }

  const OrderDetail = await orderDetail.find({ Order: Id });

  const total = OrderDetail.length || 0;

  res.status(201).json({
    success: true,
    Order,
    total: total,
    OrderDetail,
  });
});

exports.removeItemCart = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const pointTransaction = { session };

  const itemCartId = req.query.itemCartId
  console.log('itemCartId: ', itemCartId)
  const item = await logOrderDetail.findById(itemCartId)
  if (!item) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("Item in card not found");
    return next(err);
  }
  item.isDelete = true;
  item.save(pointTransaction)

  await session.commitTransaction();
  session.endSession();

  res.status(201).json({
    success: true
  });
});

exports.totalSales = catchAsyncErrors(async (req, res, next) => {
  const totalSales = await Order.aggregate([
    {
      $match: {
        isDelete: 0,
      },
    },
    {
      $group: {
        _id: null,
        totalSales: {
          $sum: Amount,
        },
      },
    },
  ]);

  if (!totalSales) {
    const err = new Error("The order sales cannot be generated");
    return next(err);
  }

  res.status(201).json({
    success: true,
    totalSales: totalSales,
  });
});
