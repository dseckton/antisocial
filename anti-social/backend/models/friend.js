const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    id: String,
    name: String,
    location: String,
    bday: String,
    picUrl: String
    // posts: [String],
    // friends: [String],
    // comments: [String],
})

module.exports = mongoose.model('Friend', friendSchema);