const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

//agregar el middleware de auth
router.get("/welcome", (req, res) => {
  res.status(200).send("Bienvenido");
});

module.exports = router;
