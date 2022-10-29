const express = require("express");
const multer = require("multer");

const router = express.Router();
const {
    registerAccount,
    getAccountList,
    loginAccount,
    logoutAccount,
    forgotPassword,
    resetPassword
} = require('../controllers/AccountController');

const { 
    isAuthenticatedAccount, 
    authorizeRoles 
} = require('../middlewares/authAccount');



/**
 * @swagger
 * components:
 *   schemas:
 *     Account:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         Id:
 *           type: string
 *           description: The auto-generated id of the Account
 *         FullName:
 *           type: string
 *           description: The Account fullname 
 *         Email:
 *           type: string
 *           description: The Account email
 *         Password:
 *           type: string
 *           description: The Account Password
 *         Role:
 *           type: string
 *           description: The Account role
 *         Address:
 *           type: string
 *           description: The Account address
 *         Phone:
 *           type: string
 *           description: The Account phone
 *         Created_At:
 *           type: date
 *           description: The Account price
 *         Modified_At:
 *           type: date
 *           description: The Account price
 *         isDelete:
 *           type: bool
 *           description: The Account price
 *       example:
 *         FullName: string
 *         Email: string
 *         Password: string
 *         Role: string
 *         Address: string
 *         Phone: string
 */

 /**
  * @swagger
  * tags:
  *   name: Accounts
  *   description: The Accounts managing API
  */

 /**
 * @swagger
 * /accounts/getAccountList:
 *   get:
 *     summary: Returns the list of all the Accounts
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: The list of the Accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */

router.get("/getAccountList", isAuthenticatedAccount, authorizeRoles('admin'), getAccountList);

/**
 * @swagger
 * /accounts/registerAccount:
 *   post:
 *     summary: Returns Account
 *     tags: [Accounts]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FullName:
 *                 type: string   
 *               Email:
 *                 type: string 
 *               Password:
 *                 type: string  
 *     responses:
 *       200:
 *         description: Create new Account
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */
 router.post("/registerAccount", registerAccount);

 /**
 * @swagger
 * /accounts/loginAccount:
 *   post:
 *     summary: Returns Account
 *     tags: [Accounts]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Email:
 *                 type: string   
 *               Password:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Create new Account
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */
  router.post("/loginAccount", loginAccount);

 /**
 * @swagger
 * /accounts/logoutAccount:
 *   get:
 *     summary: Returns message
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: Logout Account
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */

  router.get("/logoutAccount", logoutAccount);

/**
 * @swagger
 * /accounts/forgotPassword:
 *   post:
 *     summary: Returns message
 *     tags: [Accounts]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:   
 *               Email:
 *                 type: string 
 *     responses:
 *       200:
 *         description: Forgot password
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */
 router.post("/forgotPassword", forgotPassword);

 /**
 * @swagger
 * /accounts/resetPassword:
 *   put:
 *     summary: Returns Account
 *     tags: [Accounts]
 *     parameters:
 *     - in: query
 *       name: token
 *       description: Reset Password Token
 *       schema:
 *         type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:   
 *               password:
 *                 type: string 
 *               confirmPassword:
 *                 type: string 
 *     responses:
 *       200:
 *         description: resetPasswordToken
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 */
  router.put("/resetPassword", resetPassword);

module.exports = router;
