const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');
const Comment = require('./models/comment');
const Friend = require('./models/friend');
const mongoose = require('mongoose');

// mongodb credentials { user: dbAdmin, password: dbAdminPass }

mongoose.connect("mongodb+srv://dbAdmin:dbAdminPass@antisocial-52yg1.mongodb.net/node-angular?retryWrites=true&w=majority", { 
    useNewUrlParser: true }).then(() => {
    console.log("Connection Established")
}).catch(() => {
    console.log("Connection Failed")
})

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, x-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
    next();
})

app.post("/posts", (req, res, next) => {
    const post = new Post({
        time: req.body.time,
        author: req.body.author,
        content: req.body.content,
        comments: req.body.comments
    });
    post.save();
    res.status(201).json({
        message: 'Post added.'
    });
});

app.get('/posts', (req, res, next) => {

    Post.find().then(posts => {
        res.status(200).json({
            message: 'Fetched properly.',
            posts: posts
        })
    });
});

app.put('/posts/:time', (req, res, next) => {
    const post = new Post({
        _id: req.body.id,
        time: req.body.time,
        author: req.body.author,
        content: req.body.content,
        comments: req.body.comments
    });
    console.log(post);
    Post.updateOne({time: req.body.time}, {$set: post}).then(result => {
        console.log(result);
        
    });
    res.status(200).json({message: "Update Successful"})
})

app.delete('/posts/:time', (req, res, next) => {
    Post.deleteOne({time: req.params.time}).then(result => {
        console.log(result);
    });
    res.status(200).json({
        message: 'Post Deleted'
    });
});

// app.post('/comments', (req, res, next) => {
//     const comment = new Comment({
//         post: req.body.post,
//         time: req.body.time,
//         author: req.body.author,
//         content: req.body.content
//     });
//     post.save();
//     res.status(201).json({
//         message: 'Post added.'
//     });
//     console.log(post);
// });

// app.get('/comments', (req, res, next) => {

//     Comment.find().then(posts => {
//         console.log(posts);
//         res.status(200).json({
//             message: 'Fetched properly.',
//             posts: posts
//         })
//     });
// });

// app.delete('/comments/:time', (req, res, next) => {
//     Comment.deleteOne({time: req.params.time}).then(result => {
//         console.log(result);
//     });
//     res.status(200).json({
//         message: 'Post Deleted'
//     });
// });

app.post('/friends', (req, res, next) => {
    const friend = new Friend({
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
        bday: req.body.bday,
        picUrl: req.body.picUrl
        // posts: req.body.content,
        // friends: req.body.content,
        // comments: req.body.content
    });
    friend.save();
    res.status(201).json({
        message: 'Friend added.'
    });
});

app.get('/friends', (req, res, next) => {

    Friend.find().then(friends => {
        res.status(200).json({
            message: 'Fetched properly.',
            friends: friends
        })
    });
});

app.delete('/friends/:id', (req, res, next) => {
    Friend.deleteOne({time: req.params.time}).then(result => {
        console.log(result);
    });
    res.status(200).json({
        message: 'Friend Obliterated'
    });
});

module.exports = app;