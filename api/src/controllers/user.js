const jwt = require("jsonwebtoken");
const User = require("../models/User");

//const KEY = process.env.KEY // no sé porque no lo toma 

const UserController = {
  //agregar todas las validaciones y el status que va
  register(req, res) {
    User.create(req.body)
    .then(async (user) => {
      user.password = await user.encryptPassword(user.password);
      user.save();
      res.send(user);
    })
    .catch((e) => res.send(e));
  },
  login(req, res) {
    console.log(process.env)
    User.findOne({ email: req.body.email }).then(async (user) => {
      if (!user) {
        return res.status(400).send("Usuario inexistente");
      }

      const valid = await user.validPassword(req.body.password);

      if (!valid) {
        return res.status(401).send("Password invalido");
      }

      const token = jwt.sign({ _id: user._id }, "team-12");
      return res.status(200).json({ token, user });
    });
  },
};

module.exports = UserController;
