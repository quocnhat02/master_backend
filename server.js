const { default: mongoose } = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await server.close(() => console.log(`Exit Server on port ${PORT}`));
  await mongoose.connection.close();
});
