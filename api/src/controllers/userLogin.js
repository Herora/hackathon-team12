const jwt = require("jsonwebtoken");
const User = require("../models/User");

const UserLoginController = {
  find(req, res) {
    User.findOne({ email: req.body.email }).then(async (user) => {
      if (!user) {
        return res.status(400).send("usuario inexistente");
      }

      const valid = await user.validPassword(req.body.password);

      if (!valid) {
        return res.status(401).send("Credentiales invalidas");
      }

      const token = jwt.sign({ _id: user._id }, "team-12");
      return res.status(200).json({ token, user });
    });
  },
};

module.exports = UserLoginController;
