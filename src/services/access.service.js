'use strict';

const shopModel = require('../models/shop.model');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const SALT_PASSWORD = 10;
const RoleShop = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // 1. check email exists
      const holderShop = await shopModel.findOne({ email }).lean();

      if (holderShop) {
        return {
          code: 'xxxx',
          message: 'Shop already registered',
        };
      }

      const passwordHash = await bcrypt.hash(password, SALT_PASSWORD);

      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: RoleShop.SHOP,
      });

      if (newShop) {
        // create privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
        });

        console.log({
          privateKey,
          publicKey,
        }); // save collection KeyStore
      }
    } catch (error) {
      return {
        code: 'xxx',
        status: 'error',
        message: error.message,
      };
    }
  };
}

module.exports = AccessService;
