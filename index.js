require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = 3000;

const app = express();
const controller = require('./controller/products_controller')

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser());

app.get('/api/products', controller.getAll);

app.get('/api/product/:id', controller.geOne);

app.put('/api/product/:id', controller.update);

app.post('/api/product', controller.create);

app.delete('/api/product/:id', controller.deleter);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
