import { Types } from 'mongoose';
import Blog from '../models/BlogModel.js';

export const createBlog = async (req, res) => {
  const response = await Blog.create(req.body);
  res.status(201).send(response);
};

export const findAllBlogs = async (req, res) => {
  const response = await Blog.find();
  res.status(200).send(response);
};

export const fetchSingle = async (req, res) => {
  const response = await Blog.findById(Types.ObjectId(req.params.id));
  res.status(200).send(response);
};
