const express = require("express");
const router = express.Router();

const EmpresaController = require("../controllers/empresa");

router.post("/register", EmpresaController.register);
router.post("/login", EmpresaController.login);
router.post("/:id", EmpresaController.createBootcamp);
router.get("/", EmpresaController.findAll);
router.get("/:id", EmpresaController.findMyBootcamps);
router.put("/:id", EmpresaController.update);
router.delete("/:id", EmpresaController.delete)
router.get("/bootcamp/:idBC", EmpresaController.getUsers)

// router.post("/:id", EmpresaController.eliminar)

module.exports = router;
