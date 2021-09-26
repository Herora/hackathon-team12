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

      const token = jwt.sign({ _id: empresa._id }, "team-12");
      return res.status(200).json({ token, empresa });
    });
  },
  createBootcamp(req, res) {
    let empresa = {};
    Empresa.findById(req.body.empresa).then((emp) => {
      empresa = emp;
    });

    Bootcamp.create(req.body)
      .then(async (bootcamp) => {
        const savedBootcamp = bootcamp;
        bootcamp.save();
        empresa.bootcamps = empresa.bootcamps.concat(savedBootcamp._id);
        await empresa.save();

        res.send(savedBootcamp);
      })
      .catch((e) => res.send(e));
  },
  findAll(req, res) {
    //creo que son 2 rutas, una para los bootcamps propios y otros para los de las otras empresas
    // const bootcamps = await Bootcamp.find({})
    // res.json(bootcamps)
  },
  delete(req, res) {
    //enviar info en el body para obtener la empresa
  //   let empresa = {};
  //   Empresa.findById(req.body.empresa).then((emp) => {
  //     empresa = emp;
  //   });
  //   empresa.bootcamps = empresa.bootcamps.filter(bootcamp => bootcamp != bootcamp.id)
  //   empresa.save()
    
  //   Bootcamp.deleteOne({ _id: req.params.id })
  //     .then(() => {
  //       res.sendStatus(200)
  //     })
  //     .catch((e) => res.send(e));
  },
};

module.exports = EmpresaController;