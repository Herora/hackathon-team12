const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const routes = require("./routes");
const app = express();
require("./config/db");
require('dotenv').config()

app.use(cors());

// Middleware de parseo
app.use(express.json());

// Middleware de logeo
app.use(morgan("tiny"));

// Middleware de rutas
app.use("/api", routes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
