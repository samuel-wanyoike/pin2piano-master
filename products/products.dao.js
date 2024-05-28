const { v4: uuidv4 } = require("uuid");
const Product = require('./products.entity');

/* 
  saveProduct should be a function that calls the save() function on Products Model 
  to persist products data in MongoDB Products collection of shoppingcartDB
*/
const saveProduct = (productData, callback) => {
  const newProduct = new Product({
    ...productData,
    ProductId: uuidv4(),
  });

  newProduct.save((error, savedProduct) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, savedProduct);
    }
  });
};

/* 
  getProductById should be a function that calls the findOne() function on Products Model 
  to fetch the Product document by provided Id from the Products collection of shoppingcartDB
*/
const getProductById = (productId, callback) => {
  Product.findOne({ ProductId: productId }, (error, product) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, product);
    }
  });
};

/* 
  findProductsByQuery should be a function that calls the find() function on Products Model 
  with query specifying criteria on category and productName fields
  The function should fetch all documents that match the criteria from Products 
  collection of shoppingcartDB
*/
const findProductsByQuery = (query, callback) => {
  Product.find(query, (error, products) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, products);
    }
  });
};

/* 
  updateProductDetails should be a function that calls the findOneAndUpdate() 
  function on Products Model that fetches product by id from Products collection of shoppingcartDB and updates it
*/
const updateProductDetails = (productId, updatedata, callback) => {
  Product.findOneAndUpdate(
    { ProductId: productId },
    updatedata,
    { new: true },
    (error, updatedProduct) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, updatedProduct);
      }
    }
  );
};

module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
};
