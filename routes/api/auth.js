const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Controller
const authController = require('../../controllers/authControllers');

// @route GET api/auth || @desc Test Route || @access Public
router.get('/', auth, authController.getAuthUser);

// @route POST api/auth || @desc Authenticate User & Get token || @access Public
router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Pasword is required').exists(),
  ],
  authController.login
);

module.exports = router;
