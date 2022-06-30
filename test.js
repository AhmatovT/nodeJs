const mongoose = require("mongoose");
const Post = require("./models/Post");
mongoose.connect("mongodb+srv://Timur:zVEclQSEDciJRd5W@cluster0.9z61fmy.mongodb.net/node-blog-test",);

// Post.find({}, (err, post) => {console.log(post)})

// Post.findByIdAndRemove("62baa5725c69dc4ff867e9e6", (err, post) => {
//   console.log(post);
// })

// Post.findByIdAndUpdate("62baa5725c69dc4ff867e9e6",{
//   description: "It is beatifull description"
// }, (err, post) => {console.log(post)})

// Post.find({content: "Lorem ipsum second content"}, (err, post) => {console.log(post)})

// Post.findById("62baa5725c69dc4ff867e9e6", (err, post) => {console.log(post)})

// Post.create({
//   title: "My second blog",
//   description: "My second description",
//   content: "Lorem ipsum second content"
// }, (err, post) => {console.log(err, post)});

// zVEclQSEDciJRd5W