const jwt = require("jsonwebtoken");
const Bootcamp = require("../models/Bootcamp");
const Empresa = require("../models/Empresa");
const User = require("../models/User");

//const KEY = process.env.KEY // no sé porque no lo toma

const EmpresaController = {
  //agregar todas las validaciones y el status que va
  register(req, res) {
    Empresa.create(req.body)
      .then(async (empresa) => {
        empresa.password = await empresa.encryptPassword(empresa.password);
        empresa.save();
        res.send(empresa);
      })
      .catch((e) => res.send(e));
  },
  login(req, res) {
    Empresa.findOne({ email: req.body.email }).then(async (empresa) => {
      if (!empresa) {
        return res.status(400).send("Empresa inexistente");
      }

      const valid = await empresa.validPassword(req.body.password);

      if (!valid) {
        return res.status(401).send("Password invalido");
      }

      const token = jwt.sign({ _id: empresa._id }, "team-12", {
        expiresIn: "1d",
      });
      return res.status(200).json({ token, user: empresa });
    });
  },
  async createBootcamp(req, res) {
    // let empresa = {};
    // Empresa.findById(req.body.empresaId).then((emp) => {
    //   empresa = emp;
    //   Bootcamp.create(req.body)
    //     .then(async (bootcamp) => {
    //       bootcamp.save();
    //       empresa.bootcamps = empresa.bootcamps.concat(bootcamp._id);
    //       await empresa.save();

    //       res.send(savedBootcamp);
    //     })
    //     .catch((e) => res.send(e));
    // });
    const empresa = await Empresa.findById(req.params.id);

    const bootcamp = new Bootcamp({
      title: req.body.title,
      description: req.body.description,
      empresa: empresa._id,
    });

    const savedBootcamp = await bootcamp.save();
    empresa.bootcamps = empresa.bootcamps.concat(savedBootcamp._id);
    await empresa.save();

    res.send(savedBootcamp);
  },
  findAll(req, res) {
    //creo que son 2 rutas, una para los bootcamps propios y otros para los de las otras empresas
    Bootcamp.find()
      .populate("empresa")
      .then((bootcamps) => res.send(bootcamps).status(200))
      .catch((e) => res.send(e).status(400));
  },
  findMyBootcamps(req, res) {
    Empresa.findById(req.params.id)
      .populate("bootcamps")
      .then((emp) => {
        res.send(emp.bootcamps);
      });
  },
  update(req, res) {
    Bootcamp.findByIdAndUpdate(req.params.id, req.body)
      .then((bootcamp) => res.send(bootcamp).status(200))
      .catch((e) => res.send(e).status(500));
  },
  delete(req, res) {
    //probar este otro
    Bootcamp.deleteOne({ _id: req.params.id })
      .then(() => res.send(200))
      .catch((e) => res.send(e));
  },
  getUsers(req, res) {
    Bootcamp.findById(req.params.idBC)
    .populate("users")
    .then((bootcamp) => {
      console.log(bootcamp)
      res.send(bootcamp);
    });
  }
};

module.exports = EmpresaController;
