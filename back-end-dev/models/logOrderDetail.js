
const { request } = require('express');
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const logOrderDetailSchema = new schema({
    Order: {
        type: schema.ObjectId,
        ref: 'Order',
        required: true,  
    },
    Product: {
        type: schema.ObjectId,
        ref: 'Product',
        required: true,  
    },
    Account: {
        type: schema.ObjectId,
        ref: 'Account',
        required: true,  
    },
    Quantity: {
        type: Number,
        default: null
    },
    Product_Size: {
        type: String,
        default: null
    },
    Created_At: {
        type: Date,
        default: Date.now()
    },
    Modified_At: {
        type: Date,
        default: null
    },
    isDelete: {
        type: Boolean,
        default: 0
    }      
})

module.exports = mongoose.model('LogOrderDetail', logOrderDetailSchema);