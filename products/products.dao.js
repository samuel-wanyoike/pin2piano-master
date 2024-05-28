const { v4: uuidv4 } = require("uuid");
const Product = require('./products.entity')
/* 
  saveProduct should be a function that calls the save() function on Products Model 
  to persist products data in MongoDB Products collection of shoppingcartDB
*/
const saveProduct = async (productdata) => {
  const newProduct = new Product(
    {
      ...productdata, 
      ProductId: uuidv4(),
    }
  );

  try{
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error){
    throw new Error(`erro saving product: ${error.message}`)
  }
};

/* 
  getProductById should be a function that calls the findOne() function on Products Model 
  to fetch the Product document by provided Id from the Products collection of shoppingcartDB
*/
const getProductById = async (productId) => {
  try{
    const product = await Product.findOne({ ProductId: productId});
    return product;
  }
  catch (error){
    throw new Error(`error finding product by ID: ${error.message}`)
  }
};

/* 
  findProductsByQuery should be a function that calls the find() function on Products Model 
  with query specifying criteria on category and productName fields
  The function should fetch all documents that matches the criteria from Products 
  collection of shoppingcartDB
*/
const findProductsByQuery = async (query) => {
  try{
    const products = await Product.find(query);
    return products;
  } catch(error){
    throw new Error (`error finding products by query: ${error.message}`)
  }
};

/* 
  updateProductDetails should be a function that calls the findOneAndUpdate() 
  function on Products Model that fetches product by id from Products collection of shoppingcartDB and updates it
*/
const updateProductDetails = async (productId, updatedata) => {
  try{
    const updatedProduct = await Product.findOneAndUpdate(
      {ProductId : productId},
      updateData,
      {new: true}
    );
    return updatedProduct;

  } catch (error){
    throw new Error(`error updating product details: ${error.message}`)
  }
};


module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
}