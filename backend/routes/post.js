const express = require('express');
const { createPost, likeAndUnlikePosts, deletePost, getPostsOfFollowing, updateCaption, commentOnPost, deleteComment } = require('../controllers/post');
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.route('/post/upload').post(isAuthenticated ,createPost);

router
    .route('/post/:id')
    .get(isAuthenticated ,likeAndUnlikePosts)
    .put(isAuthenticated, updateCaption)
    .delete(isAuthenticated, deletePost);

router.route('/posts').get(isAuthenticated, getPostsOfFollowing)

router
    .route("/post/comment/:id")
    .put(isAuthenticated, commentOnPost)
    .delete(isAuthenticated, deleteComment);

module.exports = router;