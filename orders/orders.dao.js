const { v4: uuidv4 } = require("uuid");
const Order = require('./orders.entity');
/* 
  saveOrder should be a function that calls the save() function on Orders Model 
  to persist order data in MongoDB Orders collection of shoppingcartDB
*/
const saveOrder = async (orderData) => {
  const newOrder = new order({
    ...orderData,
    OrderId: uuidv4(),
  });

  try{
    const savedOrder = await newOrder.save();
    return savedOrder
  } catch (error){
    throw new Error(`error saving order: ${error.message}`)
  }
};


/* 
  findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
  to fetch all documents from Orders collection of shoppingcartDB,
  containing data of Orders for a given UserId
*/
const findOrdersPlacedByUser = async (userId) => {
  try{
    const orders = await Order.find({userId});
    return orders;
  } catch (error){
    throw new Error(`error finding orders for user: ${error.message}`)
  }
};


module.exports = {
  saveOrder,
  findOrdersPlacedByUser
}