'use strict';

const { CREATED } = require('../core/success.response');
const AccessService = require('../services/access.service');

class AccessController {
  signUp = async (req, res, next) => {
    // return res.status(201).json({
    //   message: '',
    //   metadata: ''
    // })

    new CREATED({
      message: 'Registered OK!',
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
