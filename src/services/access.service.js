'use strict';

const shopModel = require('../models/shop.model');

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // check email exists
      const holderShop = await shopModel.findOne({ email }).lean();

      if (holderShop) {
        return {
          code: 'xxxx',
          message: 'Shop already registered',
        };
      }

      const newShop = await shopModel.create({
        name,
        email,
        password,
        roles,
      });
    } catch (error) {
      return {
        code: 'xxx',
        message: error.message,
        status: 'error',
      };
    }
  };
}

module.exports = AccessService;
