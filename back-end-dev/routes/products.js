const express = require("express");
const router = express.Router();
const {
    createProduct,
    getProductList,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProduct,
    filterProduct
} = require('../controllers/productController')

const { uploadImage } = require('../utils/uploadImage');

const multer = require("multer");

const upload = multer()

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         Id:
 *           type: string
 *           description: The auto-generated id of the product
 *         Name:
 *           type: string
 *           description: The product name
 *         Description:
 *           type: string
 *           description: The product description
 *         Price:
 *           type: int
 *           description: The product price
 *         Quantity:
 *           type: int
 *           description: The product quantity
 *         Image:
 *           type: string
 *           description: The product img
 *         Category:
 *           type: string
 *           description: The product category
 *         Created_At:
 *           type: date
 *           description: The product price
 *         Modified_At:
 *           type: date
 *           description: The product price
 *         Size:
 *           type: string
 *           description: The product price
 *         isDelete:
 *           type: bool
 *           description: The product price
 *       example:
 *         Name: string
 *         Description: string
 *         Price: 0
 *         Quantity: 0
 *         Image: string
 *         Category: string
 *         Size: string
 */

 /**
  * @swagger
  * tags:
  *   name: Products
  *   description: The products managing API
  */

 /**
 * @swagger
 * /products/getProductList:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     parameters:
 *     - in: query
 *       name: page
 *       description: Current page
 *       schema:
 *         type: number
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.get("/getProductList", getProductList);

/**
 * @swagger
 * /products/createProduct:
 *   post:
 *     summary: Not used!!! Updating...
 *     tags: [Products]
 *     requestBody:
 *       description: Create product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Create new product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.post("/createProduct", uploadImage, createProduct);

 /**
 * @swagger
 * /products/getProductById:
 *   get:
 *     summary: Returns product
 *     tags: [Products]
 *     parameters:
 *     - in: query
 *       name: Id
 *       description: Id
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: Get single product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.get("/getProductById", getProductById);

 /**
 * @swagger
 * /products/updateProduct:
 *   put:
 *     summary: Not used!!! Updating...
 *     consumes:
 *       - application/json
 *     tags: [Products]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Id:
 *                 type: string   
 *               Name:
 *                 type: string 
 *               Description:
 *                 type: string 
 *               Price:
 *                 type: number 
 *               Quantity:
 *                 type: number 
 *               Category:
 *                 type: string 
 *               Size:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Update product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.put("/updateProduct", upload.none(), updateProduct);

 /**
 * @swagger
 * /products/deleteProduct:
 *   delete:
 *     summary: Returns message
 *     tags: [Products]
 *     parameters:
 *     - in: query
 *       name: Id
 *       description: Id
 *       schema:
 *         type: string
 *     responses:
 *       200:
 *         description: Delete product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.delete("/deleteProduct", deleteProduct);

 /**
 * @swagger
 * /products/searchProduct:
 *   get:
 *     summary: Returns product
 *     tags: [Products]
 *     parameters:
 *     - in: query
 *       name: Keyword
 *       description: Search product by keyword for field Name and Description
 *       schema:
 *         type: string
 *     - in: query
 *       name: page
 *       description: Current page
 *       schema:
 *         type: number
 *     responses:
 *       200:
 *         description: Product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.get("/searchProduct", searchProduct);

 /**
 * @swagger
 * /products/filterProduct:
 *   get:
 *     summary: Returns product
 *     tags: [Products]
 *     parameters:
 *     - in: query
 *       name: Category
 *       description: Filter Product by category
 *       schema:
 *         type: string
 *     - in: query
 *       name: Sort
 *       description: Sort Product by name or price (name = nameAsc/nameDesc, price = priceAsc/priceDesc)
 *       schema:
 *         type: string
 *     - in: query
 *       name: page
 *       description: Current page
 *       schema:
 *         type: number
 *     responses:
 *       200:
 *         description: Product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.get("/filterProduct", filterProduct);

module.exports = router;
