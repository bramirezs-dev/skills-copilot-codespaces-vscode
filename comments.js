// Create web server with express
// 1. Install express: npm install express --save
// 2. Import express module
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Get all comments
router.get('/', (req, res) => {
  Comment.find({}).exec((err, comments) => {
    if (err) {
      res.send('Error has occured');
    } else {
      res.json(comments);
    }
  });
});

// Get comments by post
router.get('/post/:id', (req, res) => {
  Comment.find({ post: req.params.id }).exec((err, comments) => {
    if (err) {
      res.send('Error has occured');
    } else {
      res.json(comments);
    }
  });
});

// Get comments by author
router.get('/author/:id', (req, res) => {
  Comment.find({ author: req.params.id }).exec((err, comments) => {
    if (err) {
      res.send('Error has occured');
    } else {
      res.json(comments);
    }
  });
});

// Get comments by id
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id).exec((err, comment) => {
    if (err) {
      res.send('Error has occured');
    } else {
      res.json(comment);
    }
  });
});

// Create comment
router.post('/', urlencodedParser, (req, res) => {
  const newComment = new Comment({

