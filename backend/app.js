const express = require('express');
const app = express();
const cookie = require('cookie-parser')

app.use(express.json());
app.use(cookie());

const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);
module.exports = app;