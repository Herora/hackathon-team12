const express = require("express");

const empresa = require("./empresas");
const usuario = require("./users");

const router = express.Router();

router.use("/empresa", empresa);
router.use("/user", usuario);

module.exports = router;
