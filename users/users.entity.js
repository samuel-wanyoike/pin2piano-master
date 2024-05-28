const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
        unique: true
    }, 
    UserName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    OrdersPlaced: {
        type: Number,
        required: true,
        default: 0,
    },
    Tags: {
        type: [String],
        required: true,
        default: Date.now,
    },
    Description: {
        type: String,
        required: true,
        default: '',
    },
    UpdatedOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
    UpdatedBy: {
        type: String,
        required: true,
    }


});

module.exports = mongoose.model('users', userSchema);
