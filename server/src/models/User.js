const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema(
  {
    googleId: { type: String, default: "" },
    userName: {
      type: String,
      required: [true, "can't be blank"],
      // match: [/^[a-zA-Z0-9\s]+$/g, "is invalid"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      // match: [/\S+@\S+\.\S+/g, "is invalid"],
      index: true,
    },
    emailVerified: { type: Boolean, default: false },
    picture: { type: String, default: "" },
    bio: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: "is already taken." });

UserSchema.methods.vaildPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash == hash;
};

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parentInt(exp.getTime() / 1000),
  });
};

UserSchema.methods.favorite = function (id) {
  if (this.favorites.indexOf(id) === -1) {
    this.favorites.push(id);
  }
  return this.save();
};

UserSchema.methods.unfavorite = function (id) {
  this.favorites.remove(id);
  return this.save();
};

UserSchema.methods.isFavorite = function (id) {
  return this.favorites.some(
    (favoriteId) => favoriteId.toString() === id.toString()
  );
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
