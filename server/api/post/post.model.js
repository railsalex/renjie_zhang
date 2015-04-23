var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number
      });

    var PostSchema = new Schema({
      title: { type: String, required: true },
      link: { type: String, optional: true },
      username: { type: String, required: true },
      comments: [CommentSchema],
      upvotes: Number
    });

    module.exports = mongoose.model('posts', PostSchema);

// 'use strict';

// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;

// var PostSchema = new Schema({
//   name: String,
//   info: String,
//   active: Boolean
// });

// module.exports = mongoose.model('Post', PostSchema);