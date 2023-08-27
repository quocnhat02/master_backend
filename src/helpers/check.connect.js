'use strict';

const mongoose = require('mongoose');

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connection: ${numConnection}`);
  return numConnection;
};

module.exports = {
  countConnect,
};
