const app = require('./src/app');
const http = require('http');

const PORT = process.env.DEV_APP_PORT || 5001;

const server = new http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log(`Exit Server`);
  });
});
