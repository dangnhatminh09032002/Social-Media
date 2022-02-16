const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: { type: String, required: true, min: 3, max: 20 },
    email: { type: String, required: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    followers: { type: Array, default: [] },
    followings: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
