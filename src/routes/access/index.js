'use strict';

const express = require('express');
const accessController = require('../../controllers/access.controller');
const { asyncHandler } = require('../../helpers/asyncHandler');
const { authentication } = require('../../auth/authUtils');

const router = express.Router();

// signUp
router.post('/shop/signup', asyncHandler(accessController.signUp));

// login
router.post('/shop/login', asyncHandler(accessController.login));

// authentication
router.use(authentication);
////////////////////

router.post('/shop/login', asyncHandler(accessController.login));

module.exports = router;
