const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  postedby: {
    type: ObjectId,
    ref: "user",
  },
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
