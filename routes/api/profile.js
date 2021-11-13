const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// Controller
const profileController = require('../../controllers/profileController');

// @route GET api/profile/me || @desc Get current user profile || @access Private
router.get('/me', auth, profileController.getCurrentUser);

// @route POST api/profile || @desc Create or update user profile || @access Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  profileController.createOrUpdateUser
);

// @route GET api/profile || @desc Get all profiles || @access Public
router.get('/', profileController.getAllProfiles);

// @route GET api/profile/user/:user_id || @desc Get profile by user id || @access Public
router.get('/user/:user_id', profileController.getProfileById);

// @route DELETE api/profile || @desc Get profile, user & posts || @access Private
router.delete('/', auth, profileController.deleteAccount);

// @route PUT api/profile/experience || @desc Add profile experience || @access Private
router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('company', 'Company is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  profileController.addProfileExperience
);

// @route DELETE api/profile/experience/:exp_id || @desc Delete experience from profile || @access Private
router.delete(
  '/experience/:exp_id',
  auth,
  profileController.deleteProfileExperience
);

// @route PUT api/profile/eduction || @desc Add profile education || @access Private
router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required').not().isEmpty(),
      check('degree', 'Degree is required').not().isEmpty(),
      check('fieldofstudy', 'Field of study is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  profileController.addPofileEducation
);

// @route DELETE api/profile/education/:exp_id || @desc Delete education from profile || @access Private
router.delete(
  '/education/:edu_id',
  auth,
  profileController.deleteProfileEducation
);

// @route GET api/profile/github/:username || @desc Get user repos from Github || @access Public
router.get('/github/:username', profileController.getUserGithub);

module.exports = router;
