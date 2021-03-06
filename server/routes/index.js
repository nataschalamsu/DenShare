const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* GET home page. */
router.post('/register', userController.signUp);
router.post('/login', userController.signIn);
router.post('/loginfb', userController.signInFb);

module.exports = router;