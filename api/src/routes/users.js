const express = require("express");
const router = express.Router();

const UserRegisterController = require("../controllers/userRegister");
const UserLoginController = require("../controllers/userLogin");

router.post("/register", UserRegisterController.create);

router.post("/login", UserLoginController.find);

router.get("/welcome", (req, res) => {
  res.status(200).send("Bienvenido");
});

module.exports = router;
