

 let products = [];

function createProduct (reqValue) {

  if( reqValue !== undefined){

   products.push(reqValue);

  }else{
    console.log('no value added');
  }
  console.log(products);
  return products
};

function getAllProducts() {
  // console.log('get All products', products)
 return products;
}

function getProductById(id) {
  // body...
};

function updateProductById(id) {
  // body...
}


function deleteProductById(id) {
  // body...
}

module.exports = {
  createProduct: createProduct,
  getAllProducts: getAllProducts,
  updateProductById: updateProductById,
  deleteProductById: deleteProductById

};