// Create web server application to handle HTTP requests
// to the comments API.

// Import express module
const express = require('express');

// Import comments controller
const commentsController = require('../controllers/comments');

// Create an express router
const router = express.Router();

// Set up routes
router.get('/', commentsController.getComments);
router.post('/', commentsController.createComment);

// Export router
module.exports = router;