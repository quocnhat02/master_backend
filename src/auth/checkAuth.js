'use strict';

const { findById } = require('../services/apiKey.service');

const HEADER = {
  API_KEY: 'x-api-key',
  AUTHORIZATION: 'Authorization',
};

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return res.status(403).json({
        message: `Forbidden Error`,
      });
    }

    // check objKey
    const objKey = await findById(key);
    if (!objKey) {
      return res.status(403).json({
        message: `Forbidden Error`,
      });
    }

    req.objKey = objKey;
    return next();
  } catch (error) {
    return res.status(403).json({
      message: `Forbidden Error`,
    });
  }
};

const permission = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(403).json({
        message: `Permission denied 1`,
      });
    }

    console.log('Permission: ', req.objKey.permissions);
    const validPermission = req.objKey.permissions.includes(permission);
    if (!validPermission) {
      return res.status(403).json({
        message: `Permission denied 2`,
      });
    }
    return next();
  };
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = {
  apiKey,
  permission,
  asyncHandler,
};
