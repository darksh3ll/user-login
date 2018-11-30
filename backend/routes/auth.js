var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController')

/* GET home page. */
router.post('/signin', authController.signIn);

module.exports = router;
