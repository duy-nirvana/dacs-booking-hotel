const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

router.post('/auth', controller.auth);

router.post('/register', controller.register);

module.exports = router;
