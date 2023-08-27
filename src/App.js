const express = require('express');
const morgan = require('morgan');

const app = express();

// init middlewares
app.use(morgan('dev'));

// init db

// init routes
app.get('/', (req, res, next) => {
  res.status(500).send({
    message: 'Hello',
  });
});

// handling error

module.exports = app;
