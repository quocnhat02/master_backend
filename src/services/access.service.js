'use strict';

const shopModel = require('../models/shop.model');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const KeyTokenService = require('./keyToken.service');
const { createTokenPair } = require('../auth/authUtils');
const { getInfoData } = require('../utils');
const { BadRequestError } = require('../core/error.response');

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
        throw new BadRequestError('Error: Shop already registered');
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
        // const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        //   modulusLength: 4096,
        //   publicKeyEncoding: {
        //     type: 'pkcs1',
        //     format: 'pem',
        //   },
        //   privateKeyEncoding: {
        //     type: 'pkcs1',
        //     format: 'pem',
        //   },
        // });

        const privateKey = crypto.randomBytes(64).toString('hex');
        const publicKey = crypto.randomBytes(64).toString('hex');

        console.log({
          privateKey,
          publicKey,
        }); // save collection KeyStore

        const keyStore = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
          privateKey,
        });

        if (!keyStore) {
          return {
            code: 'xxxx',
            message: 'keyStore error',
          };
        }

        // create token pair
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          publicKey,
          privateKey
        );

        return {
          code: 201,
          metadata: {
            shop: getInfoData({
              object: newShop,
              fields: ['_id', 'username', 'email'],
            }),
            tokens,
          },
        };
      }
      return {
        code: 200,
        metadata: null,
      };
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
