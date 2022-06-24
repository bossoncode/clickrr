const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  profileTitle: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  links: {
    type: Array,
    default: [],
  },
  socialIcons: {
    type: Array,
    default: [],
  },
  bio: {
    type: String,
    default: "",
  },
  views: {
    type: Number,
    default: 0,
  },
  theme: {
    type: String,
    default: "pacific-blue",
  },
  profilePic: {
    type: String,
  },
  coverPic: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    default: "",
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  showWatermark: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);