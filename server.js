const app = require('./src/app');

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit Server on port ${PORT}`));
});
