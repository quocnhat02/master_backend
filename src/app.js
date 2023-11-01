const express = require('express');
const compression = require('compression');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Initialize middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Initialize database
require('./databases/init.mongodb');

// Initialize routes
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello',
  });
});

// Handle errors

module.exports = app;
