const express = require('express');
const router = express.Router();

// access routes
router.use('/v1/api', require('./access'));

module.exports = router;
