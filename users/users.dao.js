const { v4: uuidv4 } = require("uuid");
const User = require('./users.entity');
/* 
  saveUser should be a function that calls the save() function on Users Model 
  to persist user data in MongoDB Users collection of shoppingcartDB
*/
const saveUser = async (userdata) => {
  const newUser = new User({
    ...userdata,
    UserId: uuidv4(),
  });

  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error){
    throw new Error('Error saving user: ${error.message}')
  }
};

/* 
  findUsers should be a function that calls the find() function on Users Model 
  to fetch all documents from Users collection of shoppingcartDB
*/
const findUsers = async () => {
  try{
    const users = await User.find();
    return users;
  } catch (error){
    throw new Error(  `error finding users: ${error.message}`)
  }
};

/* 
  getUserByEmail should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given email
*/
const getUserByEmail = async (email) => {
  try{
    const user = await User.findOne({Email: email});
    return user;
  } catch (error){
    throw new Error(`error findong user by email: ${error.message}`)
  }
};

/* 
  getUserById should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given userId
*/
const getUserById = async (userid) => {
  try {
    const user = await User.findOne({UserId: userId});
    return user;

  } catch (error){
    throw new Error (`error finding user by ID: ${error.message}`)
  }
};

/* 
  updateUserDetails should be a function that calls the findOneAndUpdate() 
  function on Users Model that fetches user by id from Products collection of shoppingcartDB and updates it
*/
const updateUserDetails = async(userId, updateDate) => {
  try{
    const updatedUser = await User.findOneAndUpdate(
      {UserId : userId},
      updateData,
      {new: true}
    );
    return updatedUser;
  } catch (error){
    throw new Error(`error updating user details: ${error.message}`)
  }
};

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById
}