const express = require('express');
const app = express();
const cookie = require('cookie-parser')

app.use(express.json());
app.use(cookie());

const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api/v1', products);
app.use('/api/v1', auth);
module.exports = app;