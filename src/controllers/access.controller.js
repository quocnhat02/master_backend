'use strict';

const { CREATED, OK } = require('../core/success.response');
const AccessService = require('../services/access.service');

class AccessController {
  // handlerRefreshToken = async (req, res, next) => {
  //   new OK({
  //     message: 'Get token success',
  //     metadata: await AccessService.handlerRefreshToken(req.body.refreshToken),
  //   }).send(res);

  // v2 fixed, no need accessToken
  handlerRefreshToken = async (req, res, next) => {
    new OK({
      message: 'Get token success',
      metadata: await AccessService.handlerRefreshToken({
        refreshToken: req.refreshToken,
        user: req.user,
        keyStore: req.keyStore,
      }),
    }).send(res);
  };

  logout = async (req, res, next) => {
    new OK({
      message: 'Logout OK!',
      metadata: await AccessService.logout(req.keyStore),
    }).send(res);
  };
  login = async (req, res, next) => {
    new OK({
      message: 'Login OK!',
      metadata: await AccessService.login(req.body),
    }).send(res);
  };

  signUp = async (req, res, next) => {
    new CREATED({
      message: 'Registered OK!',
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
