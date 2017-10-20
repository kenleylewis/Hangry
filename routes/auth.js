var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth-controller.js')

//building my restful api
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;