const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, require: true },
    summary: { type: String, require: true },
    content: { type: String, require: true },
    cover: { type: String, require: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

//timestamps to Thailand time
// PostSchema.post("init", (doc) => {
//   const offset = 7 * 60 * 60 * 1000; // UTC+7 in milliseconds
//   if (doc.createdAt) {
//     doc.createdAt = new Date(doc.createdAt.getTime() + offset);
//   }
//   if (doc.updatedAt) {
//     doc.updatedAt = new Date(doc.updatedAt.getTime() + offset);
//   }
// });

const PostModel = model("Post", PostSchema);
module.exports = PostModel;
