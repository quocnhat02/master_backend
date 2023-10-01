const { default: mongoose } = require('mongoose');
const os = require('os');
const process = require('process');

const _SECOND = 5000;

// count connect of mongodb
const countConnect = () => {
  const numberConnection = mongoose.connections.length;
  console.log(`Number of connection mongodb: ${numberConnection}`);
};

// check over load
const checkOverload = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numberCores = os.cpus.length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connections based on number of cores
    const maxConnection = numberCores * 5;

    console.log(`Active connections: ${numberConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numberConnection > maxConnection) {
      console.log(`Connection overload was detected`);
    }
  }, _SECOND); // monitor will check over load every 5 seconds
};

module.exports = {
  countConnect,
  checkOverload,
};
