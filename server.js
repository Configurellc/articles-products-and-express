const express = require('express');
const PORT = process.env.PORT || 3000;
let app = express();

let router = express.Router();


app.listen(PORT, () => {
  console.log('Server Listening..');
});

