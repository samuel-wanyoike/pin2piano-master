const mongoose = require('mongoose');
const config = require("./config")

function SetupMongooseConnections() {
  // Variable to store the connection object
  let mongooseConn = '';
  /* 
  initializeConn should be a function that calls the connect() function on mongoose
  to establish connectivity with MongoDB using the configurations provided in config.js file

  the connection should handle success and error both with the help of 
  Promise functions `then` and `catch`
*/
  const initializeConn = () => {
    if (!mongooseConn){
      mongooseConn = mongoose.connect(config.MONGO_URL)
      .then(() => {
        console.log('Mongoose connected successfully')
      })
      .catch((err)=> {
        console.error('Mongoose connection error:', err);
      });
    }
    return mongooseConn;
  };


  /*
    provide handler to handle connected event that fires when connectivity with MongoDB is established
  */
 mongoose.connection.on('connected', ()=>{
  console.log('Mongoose connected to DB');
 })

  /*
    provide handler to handle error event that fires when there is error in connecting to MongoDB with Mongoose
  */
 mongoose.connection.on('error', (err) => {
  console.error('Mongoose connnection error:', err)
 })

  /*
    provide handler to handle disconnected event that fires when app disconnects from MongoDB
  */
  mongoose.connection.on('disconnected,', () => {
    console.log('Mongoose disconnected form DB');
  })

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });

  return { 
    initializeConn,
  };
}

/**
 * Updated the mongoose connection return single connection object. function class behaves as singleton class
 * Same connection object can be returned for use.
 */
const setupConn = new SetupMongooseConnections();
module.exports = setupConn;
