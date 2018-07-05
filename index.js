require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = 3000

const app = express();

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
})

app.use(bodyParser());

app.listen(port, ()=>{
    console.log(`Listening on Port: ${port}`);
});