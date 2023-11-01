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
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Initialize database
require('./databases/init.mongodb');

// Initialize routes
app.use('/', require('./routes'));

// Handle errors

module.exports = app;
