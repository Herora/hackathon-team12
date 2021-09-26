const mongoose = require("mongoose");

var bcrypt = require("bcryptjs");

const empresaSchema = new mongoose.Schema({
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
  site: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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

const Empresa = mongoose.model("Empresa", empresaSchema);

Empresa.prototype.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  this.salt = salt;
  return bcrypt.hash(password, this.salt);
};

Empresa.prototype.validPassword = async function (passwordEnLogin) {
  return this.password === (await bcrypt.hash(passwordEnLogin, this.salt));
};

module.exports = Empresa;
