// server
const express = require('express');

// middlewares
const compression = require('compression');
const { default: helmet } = require('helmet');
const morgan = require('morgan');

const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init database
require('./databases/init.mongodb');

// init routes
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello',
  });
});

// handle error

module.exports = app;
