const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'postgres',
  password: 'postgres'
});

let products = [];
let counter = 0;

  function createProduct (req, res) {
    let reqValue = req.body;

    if( reqValue !== undefined){

      db.many(`INSERT INTO products(
        name,
        price,
        inventory
        )
        VALUES(
        '${reqValue.name}',
        ${reqValue.price},
        ${reqValue.inventory})`)

        .catch( err => {
          console.error(err);
      });

    }else{
      console.log('no value added');
    }
  };

  function getAllProducts() {
    return db.many( 'SELECT * FROM products');
  }

  function getProductById(reqId) {
    //get the element by its id

      let reqValue = reqId.body;

    // console.log('req Id', reqValue);
    // console.log('prod Id', reqId.params.id);
    // console.log('Id', reqValue.id);
  return db.one( `SELECT * FROM products WHERE id = ${reqId.params.id}`);

    // for( var i = 0; i < products.length; i++ ) {
    //    if( products[i].id === products[i].id) {
    //      return reqId;
    //    }else {
    //      return 'item not found';
    //   }
    //   console.log(products[i].id)

    // }


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