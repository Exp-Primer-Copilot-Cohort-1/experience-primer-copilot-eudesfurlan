// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Importing the comments module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.getComment(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});