const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    post: String,
    time: String,
    author: String,
    content: String
})

module.exports = mongoose.model('Comment', commentSchema);