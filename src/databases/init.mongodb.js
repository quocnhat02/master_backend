const { default: mongoose } = require('mongoose');

const {
  db: { host, name, port },
} = require('../configs/config.mongodb');

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  async connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    try {
      await mongoose.connect(connectString, {
        maxPoolSize: 50,
      });
      console.log(`Connect mongodb success: ${name}`);
    } catch (err) {
      console.log('Error connect mongodb');
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
