const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/Post");

mongoose.connect("mongodb+srv://Timur:zVEclQSEDciJRd5W@cluster0.9z61fmy.mongodb.net/node-blog",);
const app = express();
const expressEdge = require("express-edge");

app.use(expressEdge.engine);
app.set("views", `${__dirname}/views`);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("index", {posts})
})
app.get("/about", (req, res) => {
  res.render("about");  
})
app.get("/contact", (req, res) => {
  res.render("contact");
})
app.get("/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render("post", {post});
})
app.get("/post/new", (req, res) => {
  res.render("create");
})
app.post("/post/create", (req, res) => {
  Post.create(req.body, (err, post) => {
    res.redirect("/")
  })
})


app.listen(5000, () => console.log("Server has been Started on Port 5000..."))