
const express = require("express");
const router = express.Router();
const {
    addToCart,
    getProductInCart,
    getOrderList,
    getOrderById,
    removeItemCart,
    createOrder,
    paymentOrderByCash,
    payment
} = require('../controllers/oderController')

const { 
  isAuthenticatedAccount,
  authorizeRoles
} = require('../middlewares/authAccount');

const multer = require("multer");

const upload = multer()

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         Id:
 *           type: string
 *           description: The auto-generated id of the order
 *         Account:
 *           type: string
 *           description: The account id
 *         Amount:
 *           type: number
 *           description: The order amount
 *         Order_FullName:
 *           type: string
 *           description: The order full name
 *         Order_Address:
 *           type: string
 *           description: The order address
 *         Order_Phone:
 *           type: string
 *           description: The order phone
 *         Order_Date:
 *           type: date
 *           description: The order date
 *         Order_Status:
 *           type: string
 *           description: The order status
 *         Created_At:
 *           type: date
 *           description: The created date time
 *         Modified_At:
 *           type: date
 *           description: The modified date time
 *         isDelete:
 *           type: bool
 *           description: The order record
 *       example:
 *         Account: string
 *         Amount: number
 *         Order_FullName: string
 *         Order_Address: string
 *         Order_Phone: string
 *         Order_Date: date
 *         Order_Status: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LogOrderDetail:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         Id:
 *           type: string
 *           description: The auto-generated id of the LogOrderDetail
 *         Order:
 *           type: string
 *           description: The log order detail Order
 *         Product:
 *           type: string
 *           description: The log order detail Product
 *         Account:
 *           type: string
 *           description: The log order detail Account
 *         Quantity:
 *           type: number
 *           description: The log order detail quantity
 *         Product_Size:
 *           type: string
 *           description: The log order detail product size
 *         Created_At:
 *           type: date
 *           description: The created date time
 *         Modified_At:
 *           type: date
 *           description: The modified date time
 *         isDelete:
 *           type: bool
 *           description: The order record
 *       example:
 *         Product: string
 *         Quantity: 0
 *         Product_Size: string
 */

 /**
  * @swagger
  * tags:
  *   name: Orders
  *   description: The orders managing API
  */

 /**
 * @swagger
 * /orders/getProductInCart:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
  router.get("/getProductInCart", isAuthenticatedAccount, getProductInCart);

 /**
 * @swagger
 * /orders/addToCart:
 *   post:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     requestBody:
 *       description: Create log order detail
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogOrderDetail'
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LogOrderDetail'
 */
  router.post("/addToCart", isAuthenticatedAccount, addToCart);

 /**
 * @swagger
 * /orders/getOrderList:
 *   post:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
  router.post("/getOrderList", isAuthenticatedAccount, authorizeRoles('admin'), getOrderList);

 /**
 * @swagger
 * /orders/getOrderById:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     parameters:
 *     - in: query
 *       name: Id
 *       description: Id
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
  router.get("/getOrderById", isAuthenticatedAccount, authorizeRoles('admin'), getOrderById);

 /**
 * @swagger
 * /orders/removeItemCart:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     parameters:
 *     - in: query
 *       name: itemCartId
 *       description: Log Order Detail Id
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: message
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
  router.get("/removeItemCart", isAuthenticatedAccount, removeItemCart);

/**
 * @swagger
 * /orders/paymentOrderByCash:
 *   post:
 *     summary: Return order detail
 *     tags: [Orders]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderEmail:
 *                 type: string   
 *               orderFullName:
 *                 type: string 
 *               orderAddress:
 *                 type: string 
 *               orderPhone:
 *                 type: string 
 *               productList:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string   
 *                     productQuantity:
 *                       type: number 
 *                     productSize:
 *                       type: string 
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
 router.post("/paymentOrderByCash", isAuthenticatedAccount, paymentOrderByCash);

 /**
 * @swagger
 * /orders/payment:
 *   get:
 *     summary: Not used!!! Updating...
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
  router.get("/payment", isAuthenticatedAccount, payment);

  module.exports = router;