const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  repository: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bootcamps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bootcamp",
    },
  ],
  salt: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

User.prototype.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  this.salt = salt;
  return bcrypt.hash(password, this.salt);
};

User.prototype.validPassword = async function (passwordEnLogin) {
  return this.password === (await bcrypt.hash(passwordEnLogin, this.salt));
};

module.exports = User;
