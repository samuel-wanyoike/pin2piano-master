const { v4: uuidv4 } = require("uuid");
const Order = require('./orders.entity');
const { deleteOne } = require("../users/users.entity");
/* 
  saveOrder should be a function that calls the save() function on Orders Model 
  to persist order data in MongoDB Orders collection of shoppingcartDB
*/
const saveOrder = (orderData, callback) => {
  const newOrder = new Order({
    ...orderData,
    OrderId: uuidv4(),
  });

  newOrder.save((err, savedOrder) => {
    if(err){
      callback(err, null)
    }
    else{
      callback(null, savedOrder)
    }
  });

  
};


/* 
  findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
  to fetch all documents from Orders collection of shoppingcartDB,
  containing data of Orders for a given UserId
*/
const findOrdersPlacedByUser = (userId, callback) => {
  Order.find({ UserId: userId }, (error, orders) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, orders);
    }
  });
};


module.exports = {
  saveOrder,
  findOrdersPlacedByUser
}