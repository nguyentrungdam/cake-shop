// const paypal = require('paypal-rest-sdk');

// paypal.configure({
//     'mode': 'sandbox', //sandbox or live
//     'client_id': process.env.PAYPAL_CLIENT_ID,
//     'client_secret': process.env.PAYPAL_CLIENT_SECRET
// });

// exports.paypalSandbox = paypal;
/////////////////////////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
//const { startSession } = require('mongoose')

const catchAsyncErrors = require("../utils/catchAsyncErrors");
const pagination = require("../utils/pagination");
const logOrderDetail = require("../models/logOrderDetail");
const account = require("../models/account");
const order = require("../models/order");
const product = require("../models/product");
const orderDetail = require("../models/orderDetail");
const paypal = require("../utils/paypalSandbox")

exports.getProductInCart = catchAsyncErrors(async (req, res, next) => {
  //get data
  const tempAccount = req.Account;

  const LogOrderDetail = await logOrderDetail
    .find({ Account: tempAccount._id })
    .populate("Product");
  const total = LogOrderDetail.length;

  //console.log('quantity: ', LogOrderDetail[0].Product.Quantity);

  res.status(201).json({
    success: true,
    total: total,
    LogOrderDetail,
  });
});

// exports.addOrder = catchAsyncErrors(async (req, res, next) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   const pointTransaction = { session };

//   //get data
//   const tempAccount = req.Account;

//   // check order with account and status
//   let tempOrder = await order.findOne({
//     Account: tempAccount._id,
//     Order_Status: "await",
//     isDelete: 0,
//   });
//   if (!tempOrder) {
//     const err = new Error("An error in process ordering");
//     err.name = "Cart Empty";
//     return next(err);
//   }

//   // check product in cart
//   const tempLogOrderDetail = await logOrderDetail.find({
//     Order: tempOrder._id,
//     //Account: tempAccount._id, // Use for advanced ordering feature
//     isDelete: 0,
//   });

//   if (!tempLogOrderDetail) {
//     const err = new Error("Cart empty");
//     return next(err);
//   }

//   // Insert product into model order detail
//   // Delete product in model log order detail
//   let tempProduct;
//   let tempOrderDetail;
//   let OrderDetail;
//   let Product;
//   let Order;
//   let totalPrice = 0;
//   for (var i = 0; i < tempLogOrderDetail.length; i++) {
//     tempProduct = await product.findOne({
//       _id: tempLogOrderDetail[i].Product,
//       isDelete: 0,
//     });
//     if (!tempProduct) {
//       await session.abortTransaction();
//       session.endSession();

//       const err = new Error("Product not found");
//       return next(err);
//     }
//     if (tempProduct.Quantity < tempLogOrderDetail[i].Quantity) {
//       await session.abortTransaction();
//       session.endSession();

//       const err = new Error("Not enough product quantity");
//       return next(err);
//     }

//     tempOrderDetail = new orderDetail();
//     tempOrderDetail.Order = tempLogOrderDetail[i].Order;
//     tempOrderDetail.Product = tempLogOrderDetail[i].Product;
//     tempOrderDetail.Price = tempProduct.Price;
//     tempOrderDetail.Quantity = tempLogOrderDetail[i].Quantity;
//     tempOrderDetail.Product_Size = tempLogOrderDetail[i].Product_Size;

//     OrderDetail = await orderDetail.create([tempOrderDetail], pointTransaction);

//     // Delete product in model log detail order
//     tempLogOrderDetail[i].isDelete = 1;
//     Product = await tempLogOrderDetail[i].save(pointTransaction);

//     // TOTAL price order
//     totalPrice += tempProduct.Price;

//     // UPDATE product quantity
//     tempProduct.Quantity -= tempLogOrderDetail[i].Quantity;
//     Order = await tempProduct.save(pointTransaction);
//   }

//   // Update order status in model order
//   tempOrder.Amount = totalPrice;
//   tempOrder.Order_Status = "order";
//   tempOrder.Order_Date = Date.now();
//   tempOrder.Modified_At = Date.now();
//   Order = await tempOrder.save(pointTransaction);

//   await session.commitTransaction();
//   session.endSession();

//   res.status(201).json({
//     success: true,
//     Order,
//   });
// });

exports.addToCart = catchAsyncErrors(async (req, res, next) => {
  //get data
  const tempAccount = req.Account;
  const { Product, Quantity, Product_Size } = req.body;

  //validate product id
  const ObjectId = mongoose.Types.ObjectId;
  if (!Product || !ObjectId.isValid(Product)) {
    const err = new Error("Product id not valid");
    return next(err);
  }

  //check product in stock
  const tempProduct = await product.findById(Product);
  if (!tempProduct || tempProduct.isDelete == true) {
    const err = new Error("Product not found");
    return next(err);
  }

  //CHECK product quantity
  if (tempProduct.Quantity < Quantity) {
    const err = new Error("The number of products in stock is not enough");
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
    Product: Product,
    Product_Size: Product_Size,
    isDelete: 0,
  });
  if (!tempLogOrderDetail) {
    //if not exist product in cart -> create product in cart
    tempLogOrderDetail = new logOrderDetail();
    tempLogOrderDetail = {
      Order: null, //tempOrder._id,
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

  LogOrderDetail = await logOrderDetail.find({
    Account: tempAccount._id,
    isDelete: 0,
  }).populate("Product");

  const total = LogOrderDetail.length;

  res.status(201).json({
    success: true,
    total: total,
    LogOrderDetail,
  });
});

exports.getOrderList = catchAsyncErrors(async (req, res, next) => {
  const orderStatus = ["order", "delivering", "done"];
  const Order = await order.find({ Order_Status: orderStatus, isDelete: false });
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
  if (!Order || Order.isDelete == true) {
    const err = new Error("Order not found");
    return next(err);
  }

  const OrderDetail = await orderDetail.find({ Order: Id, isDelete: false });

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

  const item = await logOrderDetail.findById(itemCartId)
  if (!item) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("Item in card not found");
    return next(err);
  }
  // item.isDelete = true;
  // item.save(pointTransaction)
  await logOrderDetail.deleteOne({ _id: itemCartId })

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

exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const pointTransaction = { session };
  
  //get data
  const tempAccount = req.Account;
  const productList = req.body || "null";

  // CHECK order
  const tempOrder = await order.findOne({ Account: tempAccount._id, Order_Status: "await", isDelete: false});
  if (!tempOrder) {
    const err = new Error("Shopping cart error");
    return next(err);
  }

  // DELETE product in Order Detail
  await orderDetail.deleteMany({ Order: tempOrder._id }, pointTransaction)

  // CREATE Order Detail
  let tempLogOrderDetail = new logOrderDetail();
  let tempOrderDetail = new orderDetail();
  let tempProduct = new product();
  let newOrderDetail = new orderDetail();
  let amount = 0;
  const len = productList.length;
  for (var i = 0; i < len; i ++) {
    // CHECK product in stock
    tempProduct = await product.findOne({ _id: productList[i].productId, isDelete: false });
    if(!tempProduct) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found in stock");
      return next(err);
    }

    // CHECK product in cart
    tempLogOrderDetail = await logOrderDetail.findOne({
      Account: tempAccount._id,
      Product: productList[i].productId,
      Quantity: productList[i].productQuantity,
      Product_Size: productList[i].productSize
      })
    if(!tempLogOrderDetail) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found in cart");
      return next(err);
    }

    // CHECK product quantity
    if (tempProduct.Quantity < productList[i].productQuantity) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Not enough product quantity");
      return next(err);
    }

    // SET value for Order Detail
    amount += (tempProduct.Price * productList[i].productQuantity);
    tempOrderDetail.Order = tempOrder._id;
    tempOrderDetail.Product = productList[i].productId;
    tempOrderDetail.Price = tempProduct.Price;
    tempOrderDetail.Quantity = productList[i].productQuantity;
    tempOrderDetail.Product_Size = tempLogOrderDetail.Product_Size;

    newOrderDetail = await orderDetail.create([tempOrderDetail], pointTransaction);
    if(!newOrderDetail) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("An error occurred during order creation");
      return next(err);
    }
  }

  // UPDATE amount order
  tempOrder.Amount = amount;
  await tempOrder.save(pointTransaction);

  await session.commitTransaction();
  session.endSession();

  newOrderDetail = await orderDetail.find({ Order: tempOrder._id, isDelete: false });
  const total = newOrderDetail.length || 0;

  res.json({
    success: true,
    total: total,
    OrderDetail: newOrderDetail
  });
});

exports.paymentOrderByCash = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const pointTransaction = { session };

  //get data
  const tempAccount = req.Account;
  const { orderEmail, orderFullName, orderAddress, orderPhone, productList } = req.body;

  // INIT value
  let updateCheck;
  let createCheck;

  if(!orderEmail || !orderFullName || !orderAddress || !orderPhone) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("Data input is not invalid");
    return next(err);
  }

  // CHECK order
  const tempOrder = await order.findOne({ Account: tempAccount._id, Order_Status: "await", isDelete: false});
  if (!tempOrder) {
    const err = new Error("Shopping cart error");
    return next(err);
  }

  // DELETE product in Order Detail
  await orderDetail.deleteMany({ Order: tempOrder._id }, pointTransaction)

  // CREATE Order Detail
  let tempLogOrderDetail = new logOrderDetail();
  let tempOrderDetail = new orderDetail();
  let tempProduct = new product();
  let newOrderDetail = new orderDetail();
  let amount = 0;
  const len = productList.length;
  for (var i = 0; i < len; i ++) {
    // CHECK product in stock
    tempProduct = await product.findOne({ _id: productList[i].productId, isDelete: false });
    if(!tempProduct) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found in stock");
      return next(err);
    }

    // CHECK product quantity
    if (tempProduct.Quantity < productList[i].productQuantity) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Not enough product quantity");
      return next(err);
    }

    //UPDATE product quantity in stock
    tempProduct.Quantity -= productList[i].productQuantity;
    updateCheck = await tempProduct.save(pointTransaction);
    if(!updateCheck) {
      await session.abortTransaction();
      session.endSession();
  
      const err = new Error("An error occurred during order payment");
      return next(err);
    }

    // CHECK product in cart
    tempLogOrderDetail = await logOrderDetail.findOne({
      Account: tempAccount._id,
      Product: productList[i].productId,
      Quantity: productList[i].productQuantity,
      Product_Size: productList[i].productSize
      })
    if(!tempLogOrderDetail) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found in cart");
      return next(err);
    }

    // SET value for Order Detail
    tempOrderDetail = new orderDetail();
    amount += (tempProduct.Price * productList[i].productQuantity);
    tempOrderDetail.Order = tempOrder._id;
    tempOrderDetail.Product = productList[i].productId;
    tempOrderDetail.Price = tempProduct.Price;
    tempOrderDetail.Quantity = productList[i].productQuantity;
    tempOrderDetail.Product_Size = tempLogOrderDetail.Product_Size;

    // CREATE order detail
    newOrderDetail = await orderDetail.create([tempOrderDetail], pointTransaction);
    if(!newOrderDetail) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("An error occurred during order creation");
      return next(err);
    }

    // DELETE product in cart
    deleteCheck = await logOrderDetail.deleteOne(tempLogOrderDetail, pointTransaction);
    if(!deleteCheck) {
      await session.abortTransaction();
      session.endSession();
  
      const err = new Error("An error occurred during delete product in cart");
      return next(err);
    }
  }

  // UPDATE order
  tempOrder.Order_Status = "order";
  tempOrder.Order_FullName = orderFullName;
  tempOrder.Order_Address = orderAddress;
  tempOrder.Order_Phone = orderPhone;
  tempOrder.Order_Date = Date.now();
  tempOrder.Amount = amount;
  updateCheck = await tempOrder.save(pointTransaction);
  if(!updateCheck) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during order payment");
    return next(err);
  }

  // CREATE new order with orderStatus = await
  let newOrder = new order();
  newOrder.Account = tempAccount._id;
  createCheck = await order.create([newOrder], pointTransaction);
  if(!createCheck) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during order payment");
    return next(err);
  }

  await session.commitTransaction();
  session.endSession();

  newOrderDetail = await orderDetail.find({ Order: tempOrder._id, isDelete: false });
  if(!newOrderDetail) {
    const err = new Error("An error occurred during order payment");
    return next(err);
  }
  const total = newOrderDetail.length || 0;

  res.json({
    success: true,
    Order: tempOrder,
    total: total,
    OrderDetail: newOrderDetail
  });
});

exports.paymentOrderByOnline = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const pointTransaction = { session };

  //get data
  const tempAccount = req.Account;
  const { orderEmail, orderFullName, orderAddress, orderPhone, productList } = req.body;

  if(!orderEmail || !orderFullName || !orderAddress || !orderPhone) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("Data input is not invalid");
    return next(err);
  }

  if (productList.length == 0) {
    await session.abortTransaction();
    session.endSession();
    
    const err = new Error("Product list empty");
    return next(err);
  }

  // INIT value
  let updateCheck;
  let createCheck;

  // CHECK order
  const tempOrder = await order.findOne({ Account: tempAccount._id, Order_Status: "await", isDelete: false});
  if (!tempOrder) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("Shopping cart error");
    return next(err);
  }

  // DELETE product in Order Detail
  await orderDetail.deleteMany({ Order: tempOrder._id }, pointTransaction)

  // CREATE Order Detail
  let tempLogOrderDetail = new logOrderDetail();
  let tempOrderDetail = new orderDetail();
  let tempProduct = new product();
  let newOrderDetail = new orderDetail();
  let amount = 0;
  const len = productList.length;
  for (var i = 0; i < len; i ++) {
    // CHECK product in stock
    tempProduct = await product.findOne({ _id: productList[i].productId, isDelete: false });
    if(!tempProduct) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found in stock");
      return next(err);
    }

    // CHECK product quantity
    if (tempProduct.Quantity < productList[i].productQuantity) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Not enough product quantity");
      return next(err);
    }

    // //UPDATE product quantity in stock
    // tempProduct.Quantity -= productList[i].productQuantity;
    // updateCheck = await tempProduct.save(pointTransaction);
    // if(!updateCheck) {
    //   await session.abortTransaction();
    //   session.endSession();
  
    //   const err = new Error("An error occurred during order payment");
    //   return next(err);
    // }

    // CHECK product in cart
    tempLogOrderDetail = await logOrderDetail.findOne({
      Account: tempAccount._id,
      Product: productList[i].productId,
      Quantity: productList[i].productQuantity,
      Product_Size: productList[i].productSize
      })
    if(!tempLogOrderDetail) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("Product not found in cart");
      return next(err);
    }

    // SET value for Order Detail
    tempOrderDetail = new orderDetail();
    amount += (tempProduct.Price * productList[i].productQuantity);
    tempOrderDetail.Order = tempOrder._id;
    tempOrderDetail.Product = productList[i].productId;
    tempOrderDetail.Price = tempProduct.Price;
    tempOrderDetail.Quantity = productList[i].productQuantity;
    tempOrderDetail.Product_Size = tempLogOrderDetail.Product_Size;

    // CREATE order detail
    newOrderDetail = await orderDetail.create([tempOrderDetail], pointTransaction);
    if(!newOrderDetail) {
      await session.abortTransaction();
      session.endSession();

      const err = new Error("An error occurred during order creation");
      return next(err);
    }
  }

  // UPDATE order
  tempOrder.Order_FullName = orderFullName;
  tempOrder.Order_Address = orderAddress;
  tempOrder.Order_Phone = orderPhone;
  tempOrder.Amount = amount;
  updateCheck = await tempOrder.save(pointTransaction);
  if(!updateCheck) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during order payment");
    return next(err);
  }

  await session.commitTransaction();
  session.endSession();

  //GET product in order detail
  const productInOrderDetail = await orderDetail.find({ Order: tempOrder._id , isDelete: false })
  if (!productInOrderDetail) {
    const err = new Error("Cart empty");
    return next(err);
  }

  let itemInOrderDetail = [];
  let item = {};
  let totalPrice = 0.00;
  for (var i = 0; i < productInOrderDetail.length; i++) {
    tempProduct = await product.findOne({ _id: productInOrderDetail[i].Product, isDelete: false });
    if (!tempProduct) {
      const err = new Error("Product not found in stock");
      return next(err);
    }

    item = {
      name: tempProduct.Name,
      sku: i,
      price: productInOrderDetail[i].Price,
      currency: "USD",
      quantity: productInOrderDetail[i].Quantity
    }
    itemInOrderDetail.push(item)
    totalPrice += (item.quantity * item.price);
  }

  const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal",
            "payer_info": {
              "country_code": "Ho Chi Minh"
            }
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/orders/paymentSuccess",
            "cancel_url": "https://translate.google.com"
        },
        "transactions": [{
            "item_list": {
                "items": itemInOrderDetail,
                "shipping_address": {
                  "recipient_name": orderFullName,
                  "line1":orderAddress,
                  "city": "a",
                  "state":"b",
                  "postal_code":"10000",
                  "country_code":"VN",
                  "phone": orderPhone
              },
            },
            "amount": {
                "currency": "USD",
                "total": totalPrice
            },
            "description": "Shop cake",
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
          const err = new Error("An error occurred during the checkout process");
          return next(err);
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    //res.redirect(payment.links[i].href);
                    res.json({
                      success: true,
                      redirect: payment.links[i].href,
                    })
                }
            }
        }
    });
    
});

exports.paymentSuccess = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const pointTransaction = { session };

  //get data
  const tempAccount = req.Account;
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  // INIT values
  let createCheck;
  let updateCheck;
  let deleteCheck;

  // CHECK order with account
  const tempOrder = await order.findOne({ 
    Account: tempAccount._id, 
    Order_Status: "await", 
    isDelete: false 
  })
  if (!tempOrder) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during the checkout process");
    return next(err);
  }

  // CHECK order detail with orderId
  const tempOrderDetail = await orderDetail.find({ Order: tempOrder._id });
  if (!tempOrderDetail) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during the checkout process");
    return next(err);
  }

  // DELETE product in cart and cal totalPrice
  let totalPrice = 0.00;
  let tempLogOrderDetail = new logOrderDetail();
  let tempProduct = new product();
  const lenOrderDetail = tempOrderDetail.length;
  for (var i = 0; i < lenOrderDetail; i++) {
    tempLogOrderDetail = await logOrderDetail.findOne({ 
      Account: tempAccount._id,
      Product: tempOrderDetail[i].Product,
      Quantity: tempOrderDetail[i].Quantity,
      Product_Size: tempOrderDetail[i].Product_Size,
      isDelete: false
    })

    // DELETE product in cart
    deleteCheck = await logOrderDetail.deleteOne(tempLogOrderDetail, pointTransaction);
    if(!deleteCheck) {
      await session.abortTransaction();
      session.endSession();
  
      const err = new Error("An error occurred during delete product in cart");
      return next(err);
    }

    // CHECK product in stock
    tempProduct = await product.findOne({ _id: tempOrderDetail[i].Product, isDelete: false });
    if(!tempProduct) {
      await session.abortTransaction();
      session.endSession();
  
      const err = new Error("An error occurred during delete product in cart");
      return next(err);
    }
    
    // CHECK product quantity
    if (tempProduct.Quantity < tempOrderDetail[i].Quantity) {
      await session.abortTransaction();
      session.endSession();
  
      const err = new Error("Not enough product quantity");
      return next(err);
    }

    // UPDATE product quantity
    tempProduct.Quantity -= tempOrderDetail[i].Quantity;
    updateCheck = await tempProduct.save(pointTransaction);
    if(!updateCheck) {
      await session.abortTransaction();
      session.endSession();
  
      const err = new Error("An error occurred during update product quantity");
      return next(err);
    }

    totalPrice += (tempOrderDetail[i].Quantity * tempOrderDetail[i].Price)
  }

  const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": totalPrice
          }
      }]
  };

  let errorCheck = 0;
  
  const test = await paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
      if (error) {
        errorCheck = 1;
      } else {
        errorCheck = 0;
      }
  });

  if (errorCheck == 1) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during the checkout process");
    return next(err);
  }

  // UPDATE order
  tempOrder.Amount = totalPrice;
  tempOrder.Order_Status = "order";
  tempOrder.Order_Date = Date.now();
  updateCheck = tempOrder.save(pointTransaction);
  if (!updateCheck) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during update order status");
    return next(err);
  }

  // CREATE new order with orderStatus = await
  let newOrder = new order();
  newOrder.Account = tempAccount._id;
  createCheck = await order.create([newOrder], pointTransaction);
  if(!createCheck) {
    await session.abortTransaction();
    session.endSession();

    const err = new Error("An error occurred during order payment");
    return next(err);
  }

  res.json({
    success: true,
    message: "Payment success"
  })

  await session.commitTransaction();
  session.endSession();
});