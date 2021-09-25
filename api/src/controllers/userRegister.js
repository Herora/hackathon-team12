const User = require("../models/User");

const UserRegisterController = {
  create(req, res) {
    User.create(req.body)
      .then( async(user) => {
        user.password = await user.encryptPassword(user.password);
        user.save();
        res.send(user);
      })
      .catch((e) => res.send(e));
  },
};

module.exports = UserRegisterController;
