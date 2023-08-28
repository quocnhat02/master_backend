const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

// const { checkOverload } = require('./helpers/check.connect');

const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// init db
require('./db/init.mongodb');
// checkOverload();

// init routes
app.use('/', require('./routes'));

// handling error
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next();
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal Server Error',
  });
});

module.exports = app;
