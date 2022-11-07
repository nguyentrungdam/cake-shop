const { request } = require('express');
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const productSchema = new schema({
    Name: {
        type: String,
        request: true,
        default: null
    },
    Description: {
        type: String,
        default: null
    },
    Price: {
        type: Number,
        default: null
    },      
    Quantity: {
        type: Number,
        default: null
    }, 
    Image: {
        Public_Id: {
            type: String,
            default: null
        },
        Url: {
            type: String,
            default: null
        }
    },
    Size: [
        { name: {
            type: String,
            default: 'Small'
        }},
        { name: {
            type: String,
            default: 'Normal'
        }},
        { name: {
            type: String,
            default: 'Large'
        }},
    ],
    Category: {
        type: schema.ObjectId,
        ref: 'Category',
        required: true,
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

module.exports = mongoose.model('Product', productSchema);