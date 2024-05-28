const { v4: uuidv4 } = require("uuid");
const User = require('./users.entity');

/* 
  saveUser should be a function that calls the save() function on Users Model 
  to persist user data in MongoDB Users collection of shoppingcartDB
*/
const saveUser = (userData, done) => {
  const newUser = new User({
    ...userData,
    UserId: uuidv4(),
  });

  newUser.save((error, savedUser) => {
    if (error) {
      done(error, null);
    } else {
      done(null, savedUser);
    }
  });
};

/* 
  findUsers should be a function that calls the find() function on Users Model 
  to fetch all documents from Users collection of shoppingcartDB
*/
const findUsers = (done) => {
  User.find({}, (error, users) => {
    if (error) {
      done(error, null);
    } else {
      done(null, users);
    }
  });
};

/* 
  getUserByEmail should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given email
*/
const getUserByEmail = (email, done) => {
  User.findOne({ Email: email }, (error, user) => {
    if (error) {
      done(error, null);
    } else {
      done(null, user);
    }
  });
};

/* 
  getUserById should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given userId
*/
const getUserById = (userId, done) => {
  User.findOne({ UserId: userId }, (error, user) => {
    if (error) {
      done(error, null);
    } else {
      done(null, user);
    }
  });
};

/* 
  updateUserDetails should be a function that calls the findOneAndUpdate() 
  function on Users Model that fetches user by id from Products collection of shoppingcartDB and updates it
*/
const updateUserDetails = (userId, updateData, done) => {
  User.findOneAndUpdate(
    { UserId: userId },
    updateData,
    { new: true },
    (error, updatedUser) => {
      if (error) {
        done(error, null);
      } else {
        done(null, updatedUser);
      }
    }
  );
};

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById
};
