

 let products = [];
let counter = 0;
function createProduct (reqValue) {

  if( reqValue !== undefined){

   reqValue.id = counter;
   products.push(reqValue);

   counter++;

  }else{
    console.log('no value added');
  }
  console.log(products);
  return products
};

function getAllProducts() {

 return products;
}

function getProductById(reqId) {
  //get the element by its id

  for( var i = 0; i < products.length; i++) {
    // if( products[i].id === reqId.id) {
    //   return products[i].id;
    // }else {
    //   return 'item not found';
    // }
    console.log(products[i].id)

  }


  //modify the contexts of the id to new context

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
  getProductById: getProductById,
  updateProductById: updateProductById,
  deleteProductById: deleteProductById

};