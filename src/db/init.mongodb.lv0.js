'use strict';

const mongoose = require('mongoose');

const connectString = 'mongodb://127.0.0.1/shopDev';

mongoose
  .connect(connectString)
  .then((_) => console.log('Connected MongoDb Success'))
  .catch((err) => console.log('Error Connect MongoDb ', err));

if (1 === 1) {
  mongoose.set('debug', true);
  mongoose.set('debug', { color: true });
}

module.exports = mongoose;
