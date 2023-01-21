import { Schema, model } from 'mongoose';

const BlogSchema = new Schema({
  user: String,
  value: String,
});
const Blog = model('Blog', BlogSchema);

export default Blog;
