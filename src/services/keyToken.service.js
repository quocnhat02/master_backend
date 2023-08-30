'use strict';

const { default: mongoose } = require('mongoose');
const keyTokenModel = require('../models/keyToken.model');

class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken,
  }) => {
    try {
      // level 0
      // const token = await keyTokenModel.create({
      //   user: userId,
      //   publicKey,
      //   privateKey,
      // });

      // return token ? token.publicKey : null;

      // level xx
      const filter = { user: userId };
      const update = {
        publicKey,
        privateKey,
        refreshTokensUsed: [],
        refreshToken,
      };
      const options = { upsert: true, new: true };

      const tokens = await keyTokenModel.findOneAndUpdate(
        filter,
        update,
        options
      );

      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return error;
    }
  };

  static findByUserId = async (userId) => {
    return await keyTokenModel
      .findOne({ user: new mongoose.Types.ObjectId(userId) })
      .lean();
  };

  static removeKeyById = async (id) => {
    return await keyTokenModel
      .findOneAndRemove(id, {
        new: true,
      })
      .lean();
  };

  static findByRefreshTokenUsed = async (refreshToken) => {
    return await keyTokenModel
      .findOne({ refreshTokenUsed: refreshToken })
      .lean();
  };

  static findByRefreshToken = async (refreshToken) => {
    return await keyTokenModel.findOne({ refreshToken });
  };

  static deleteKeyById = async (userId) => {
    return await keyTokenModel
      .deleteOne({ user: new mongoose.Types.ObjectId(userId) })
      .lean();
  };
}

module.exports = KeyTokenService;
