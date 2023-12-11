const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoute = require('./routes/productRoute');
const connectDB = require('./config/db');

const app = express();


connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('welcome to the express server');
});

app.use('/products', productRoute);

module.exports = app;

