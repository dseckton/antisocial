const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    time: String,
    author: {
        name: String,
        picUrl: String
    },
    content: String,
    comments: [String]
})

module.exports = mongoose.model('Post', postSchema)