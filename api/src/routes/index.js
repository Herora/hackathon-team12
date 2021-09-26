const express = require("express");

const empresas = require("./empresas");
const users = require("./users");

const router = express.Router();

router.use("/empresa", empresas);
router.use("/user", users);

module.exports = router;
