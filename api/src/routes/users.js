const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("/register", UserController.register);
router.post("/login", UserController.login)
router.get("/", UserController.findAll);
router.post("/:id", UserController.add);
router.get("/:id", UserController.findMyBootcamps);
router.put("/:id", UserController.remove)

//agregar el middleware de auth
router.get("/welcome", (req, res) => {
  res.status(200).send("Bienvenido");
});

module.exports = router;
