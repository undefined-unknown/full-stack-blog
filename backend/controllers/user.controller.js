import User from "../models/user.model.js";

export const getUserSavePosts = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("No authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  res.status(200).json(user.savePosts);
};

export const savePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.body.postId;
  if (!clerkUserId) {
    return res.status(401).json("No authenticated!");
  }

  const user = await User.findOne({ clerkUserId });
  console.log("savePost postId", postId);
  console.log("savePost user", user);
  const isSaved = user.savePosts.some((post) => post === postId);
  console.log("isSaved", isSaved);

  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savePosts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savePosts: postId },
    });
  }

  res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
};
