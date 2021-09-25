const jwt = require("jsonwebtoken");

const { KEY } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.header["x-access-token"];

  if (!token)
    return res.status(403).send("No se ha enviado el tokem de autenticación");

  try {
    const decoded = jwt.verify(token, KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Token invalido");
  }
  return next();
};

module.exports = verifyToken;
