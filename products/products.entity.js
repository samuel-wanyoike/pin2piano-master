const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductId: {
        type: String,
        required: true,
        unique: true,
    },
    Productname: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
        default: '0',
    },
    Price: {
        type: Number,
        required: true,
        default: 0,
    },
    UnitsAvailable: {
        type: Number,
        required: true,
        default: 0,
    },
    Tags: {
        type: [String],
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    Metadata: {
        type: Object,
        default: {},  // Optional, can be omitted or assigned a default empty object
    },
    UpdatedOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
    UpdatedBy: {
        type: String,
        required: true,
    },
});



module.exports = mongoose.model('products', productSchema);
