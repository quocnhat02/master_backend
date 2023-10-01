const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check.connect');
const {
  db: { host, port, name },
} = require('../configs/mongodb.config');

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  static instance;

  constructor() {
    this.connect();
  }

  connect(type = 'mongodb') {
    // dev
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then(() => {
        console.log(`Connected mongodb : ${connectString}`);
        countConnect();
      })
      .catch((err) => console.log(`Error: ${err}`));
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
