const { default: mongoose } = require('mongoose');
const os = require('os');
const process = require('process');

const _SECOND_CHECK_MONITOR = 5000;

// count connect
const countConnect = () => {
  const numberConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numberConnection}`);
};

// check over load
const checkOverload = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numberCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connections based on number osf cores
    const maxConnections = numberCores * 5;

    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numberConnection > maxConnections) {
      console.log('Connection overload detected!');
    }
  }, _SECOND_CHECK_MONITOR);
};

module.exports = { countConnect };
