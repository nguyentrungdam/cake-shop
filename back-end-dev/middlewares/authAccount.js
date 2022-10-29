
const jwt = require('jsonwebtoken');
const catchAsyncErrors = require('../utils/catchAsyncErrors');
const account = require('../models/account');


exports.isAuthenticatedAccount = catchAsyncErrors( async (req, res, next) => {
    const { token } = req.cookies

    if(!token) {
        const err = new Error('Login first to access this resource');
        return next(err);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.Account = await account.findById(decoded.id);

    next();
})

exports.authorizeRoles = ( ...role ) => {
    return (req, res, next) => {
        if (!role.includes(req.Account.Role)) {
            const err = new Error('Roles (' + req.Account.Role + ') is not allowed to access this resource');
            return next(err);
        }

        next();
    }
}