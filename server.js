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

  let productStore = products.getAllProducts();
    let store = {
      'productData': productStore


    }
    console.log('my store', productStore);

    res.render('products', store)
  })

  let counter = {id: 0};
    app.post('/products', (req, res) => {
     let resValue = req.body;
      // console.log(resValue);
      counter.id++;
      // console.log('number:', counter);
      products.createProduct(resValue)
    res.end();
    })

  app.listen(PORT, () => {
    console.log('Server Listening..');
  });

