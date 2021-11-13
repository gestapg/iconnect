const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../..//models/Post');
const Profile = require('../..//models/Profile');
const User = require('../..//models/User');

// Controller
const postController = require('../../controllers/postController');

// @route POST api/posts || @desc Create apost ||@access Private
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  postController.createPost
);

// @route GET api/posts || @desc Get all posts || @access Private
router.get('/', auth, postController.getAllPosts);

// @route GET api/posts/:id || @desc Get a post by id || @access Private
router.get('/:id', auth, postController.getPostById);

// @route DELETE api/posts/:id || @desc Delete a posts || @access Private
router.delete('/:id', auth, postController.deletePostById);

// @route PUT api/posts/like/:id || @desc Like a post || @access Private
router.put('/like/:id', auth, postController.updatePostLikes);

// @route PUT api/posts/unlike/:id || @desc Unlike a post || @access Private
router.put('/unlike/:id', auth, postController.updatePostUnlike);

// @route POST api/posts/comment/:id || @desc Comment on a post || @access Private
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  postController.addCommentOnPost
);

// @route DELETE api/posts/comment/:id/:comment_id || @desc Delete comment on a post || @access Private
router.delete(
  '/comment/:id/:comment_id',
  auth,
  postController.deleteCommentOnPost
);

module.exports = router;
