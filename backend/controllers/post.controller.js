import { getAuth } from "@clerk/express";
import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

const urlEndpoint = process.env.IK_URL_ENDPOINT;
const publicKey = process.env.IK_PUBLIC_KEY;
const privateKey = process.env.IK_PRIVATE_KEY;

const imagekit = new ImageKit({
  urlEndpoint,
  publicKey,
  privateKey,
});

// 获取所有文章
export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const posts = await Post.find()
    .populate("user", "username")
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;
  res.status(200).json({ posts, hasMore });
};

// 获取单一文章
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "user",
    "username img"
  );
  res.status(200).json(post);
};

// 创建单一文章
export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }
  const user = await User.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json("User not found!");
  }

  const baseSlug = req.body.title.replace(/ /g, "-").toLowerCase();
  let slug = baseSlug;
  let existingPost = await Post.findOne({ slug });
  let counter = 2;

  while (existingPost) {
    slug = `${baseSlug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });
  await newPost.save();
  res.status(200).json(newPost);
};

// 删除单一文章
export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  const deletePost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletePost) {
    return res.status(403).json("You can delete only your posts!");
  }

  res.status(200).json("post has been deleted!");
};

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.status(200).json(result);
};
