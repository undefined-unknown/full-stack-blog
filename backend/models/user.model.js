import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    img: {
      type: String,
    },
    savePosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
