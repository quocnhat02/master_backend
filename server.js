const app = require('./src/app');
const { disconnectDb } = require('./src/helpers/check.connect');

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await server.close(() => console.log(`Exit Server on port ${PORT}`));
  disconnectDb();
});
