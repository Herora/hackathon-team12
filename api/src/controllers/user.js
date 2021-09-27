const jwt = require("jsonwebtoken");
const Bootcamp = require("../models/Bootcamp");
const User = require("../models/User");

const UserController = {
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
    console.log(process.env);
    User.findOne({ email: req.body.email }).then(async (user) => {
      if (!user) {
        return res.status(400).send("Usuario inexistente");
      }

      const valid = await user.validPassword(req.body.password);

      if (!valid) {
        return res.status(401).send("Password invalido");
      }

      const token = jwt.sign({ _id: user._id }, "team-12", {
        expiresIn: "1d",
      });
      return res.status(200).json({ token, user });
    });
  },
  findAll(req, res) {
    Bootcamp.find()
      .populate("empresa")
      .then((bootcamps) => res.send(bootcamps).status(200))
      .catch((e) => res.send(e).status(400));
  },
  add(req, res) {
    User.findById(req.body.userId).then((user) => {
      console.log("US", user);
      user.bootcamps.push(req.params.id);
      user.save();
    });
    Bootcamp.findById(req.params.id).then((bootcamp) => {
      console.log("BC", bootcamp);
      bootcamp.users.push(req.body.userId);
      bootcamp.save();
    });
    res.sendStatus(201);
  },
  findMyBootcamps(req, res) {
    User.findById(req.params.id)
      .populate({ path: "bootcamps", populate: { path: "empresa" } })
      .then((user) => {
        res.send(user.bootcamps);
      });
  },
  remove(req, res) {
    User.findById(req.params.id).then((user) => {
      // console.log(user.bootcamps[0]._id);
      //seguir
      // user.bootcamps.push(req.params.id);
      // user.save();
      // no completado
      user.bootcamps = user.bootcamps.filter(
        (bootcamp) => bootcamp._id !== req.body.bootcampId
      );
      user.save();
    });
    res.sendStatus(201);
  },
};

module.exports = UserController;
