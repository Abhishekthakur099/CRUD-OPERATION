import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 10,

    unique: true,
  },
  age: {
    type: Number,
    minlength: 1,
    maxlength: 2,
  },
  isVerified: {
    type: Boolean,
    minlength: 1,
    maxlength: 10,
  },
  image: {
    type: Array,
  },
});

export default new mongoose.model("students", userSchema);
