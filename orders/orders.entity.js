const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    OrderId: {
        type: String,
        required: true,
        unique: true,
    },
    OrderName: {
        type: String,
        required: true,
        default: '',
      },
    ProductId: {
        type: String,
        required: true,
      },
    ProductName: {
        type: String,
        required: true,
      },
    UserId: {
        type: String,
        required: true,
      },
    UserName: {
        type: String,
        required: true,
      },
    UnitsPlaced: {
        type: Number,
        required: true,
        default: 0,
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

module.exports = mongoose.model('orders', orderSschema);
