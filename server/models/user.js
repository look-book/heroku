const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },

  lastUpdated: Date,

  fullName: String,
});
userSchema.methods.setFullName = function () {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};

userSchema.methods.lastUpdatedDate = function () {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
