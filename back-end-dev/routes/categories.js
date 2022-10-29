const express = require("express");
const router = express.Router();
const {
    createCategory,
    getCategoryList
} = require('../controllers/categoryController');

const multer = require("multer");

const upload = multer()


/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         Id:
 *           type: string
 *           description: The auto-generated id of the Category
 *         Name:
 *           type: string
 *           description: The Category name
 *         Description:
 *           type: string
 *           description: The Category description
 *         Created_At:
 *           type: date
 *           description: The Category price
 *         Modified_At:
 *           type: date
 *           description: The Category price
 *         isDelete:
 *           type: bool
 *           description: The Category price
 *       example:
 *         Name: string
 *         Description: string
 */

 /**
  * @swagger
  * tags:
  *   name: Categories
  *   description: The Categories managing API
  */

 /**
 * @swagger
 * /categories/getCategoryList:
 *   get:
 *     summary: Returns the list of all the Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */

router.get("/getCategoryList", getCategoryList);

/**
 * @swagger
 * /categories/createCategory:
 *   post:
 *     summary: Returns Category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Create new Category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
 router.post("/createCategory", upload.none(), createCategory);

module.exports = router;
