
const crypto = require('crypto');

const account = require('../models/account');
const catchAsyncErrors = require('../utils/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');

// Create new product   =>   /api/v1/admin/product/new
exports.registerAccount = catchAsyncErrors(async (req, res, next) => {
    const { FullName, Email, Password } = req.body;

    let newAccount = new account;
    newAccount = {
        FullName: FullName,
        Email: Email,
        Password: Password,      
    }
    const Account = await account.create(newAccount);

    sendToken(Account, res);
})

exports.getAccountList = catchAsyncErrors(async (req, res, next) => {
    const Account = await account.find();
    const total = Account.length;
    res.status(201).json({
        success: true,
        total: total,
        Account
    })
})

exports.loginAccount = catchAsyncErrors(async (req, res, next) => {
    const { Email, Password } = req.body;
    //console.log('Email: ', req.body.Email);

    //checks if email and password is entered by account
    if (!Email || !Password) {
        const err = new Error('Please enter email & password');
        return next(err);
    }

    const Account = await account.findOne({ Email: Email }).select('+Password');
    //console.log('Account: ', Account);

    if(!Account) {
        const err = new Error('Invalid email or password');
        return next(err);
    }

    //Check if password is correct or not
    const isPasswordMethod = await Account.comparePassword(Password);

    if (!isPasswordMethod) {
        const err = new Error('Invalid email or password');
        return next(err);
    }

    sendToken(Account, res);
})

exports.logoutAccount = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.json({
        success: true,
        message: 'Logged out'
    })
})

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const { Email } = req.body;

    const Account = await account.findOne({ Email: Email });

    if (!Account) {
        const err = new Error('Account not found with email');
        return next(err);
    }

    //Get reset token
    const resetToken = Account.getResetPasswordToken();

    await Account.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = req.protocol + '://' + req.get('host') + '/accounts/resetPassword?token=' + resetToken;

    const message = 'Your password reset token is an follow:\n\n' + resetUrl + '\n\nIf you have not requested this email, then ignore it.';

    try {
        await sendEmail({
            email: Account.Email,
            subject: 'ShopCake Password Recovery',
            message
        })

        res.json({
            success: true,
            message: 'Email sent to ' + Account.Email
        })
    }
    catch (error){
        Account.resetPasswordToken = undefined;
        Account.resetPasswordExpire = undefined;

        await Account.save({ validateBeforeSave: false });

        const err = new Error(error);
        return next(err);
    }
})

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const token = req.query.token
    const { password, confirmPassword } = req.body;

    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

    const Account = await account.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!Account) {
        const err = new Error('Password reset token is invalid or has been expired');
        return next(err);
    }

    if (password != confirmPassword) {
        const err = new Error('Password does not match');
        return next(err);
    }

    Account.Password = password;
    Account.resetPasswordToken = undefined;
    Account.resetPasswordExpire = undefined;

    await Account.save();

    sendToken(Account, res);
})