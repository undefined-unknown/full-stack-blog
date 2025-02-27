import { Webhook } from "svix";
import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  console.log("WEBHOOK_SECRET", WEBHOOK_SECRET);

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }

  const headers = req.headers;
  const payload = req.body;

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Attempt to verify the incoming webhook
  // If successful, the payload will be available from 'evt'
  // If verification fails, error out and return error code
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Webhook verification failed!",
    });
  }

  if (evt.type === "user.created") {
    const newUser = new User({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      img: evt.data.profile_image_url,
    });
    await newUser.save();
  }

  if (evt.type === "user.deleted") {
    const deleteUser = await User.findOneAndDelete({
      clerkUserId: evt.data.id,
    });

    await Post.deleteMany({
      user: deleteUser._id,
    });

    await Comment.deleteMany({
      user: deleteUser._id,
    });
  }

  res.status(200).json({
    message: "Webhook received",
  });
};
