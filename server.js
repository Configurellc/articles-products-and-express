const express = require('express');
const PORT = process.env.PORT || 3000;
const handlebars = require('express-handlebars');
const products = require('./db/products.js')
let bodyparser = require('body-parser')


let app = express();
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(bodyparser.json());
let router = express.Router();
const hbs = handlebars.create({
  extname: '.hbs',
  default: 'app'
});

  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs');


  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/products', (req, res) => {
   products.getAllProducts()
    .then( results => {
      let store = {
        'productData': results
      };
      res.render('products', store);
    });

  });

  app.get('/products/:id', (req, res) => {
    products.getProductById(req)
      .then( results => {
         let store = {
        'productData': results
      };
        console.log('By results', results);
       res.render('./partials/product', results);
      })
      .catch( error => {
        console.error('err');
      })

  });

    app.post('/products', (req, res) => {
      products.createProduct(req, res);
       res.end();
    })

  app.listen(PORT, () => {
    console.log('Server Listening..');
  });

