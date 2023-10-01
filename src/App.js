const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init database
require('./databases/init.mongodb');

// init routes
app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello World',
  });
});

// handle errors

module.exports = app;
