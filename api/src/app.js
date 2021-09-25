const express = require('express')
const morgan = require('morgan')
const routes = require("./routes");
const app = express()
require("./config/db");
require('dotenv').config()

//app.use(cors())

// Middleware de parseo
app.use(express.json());

// Middleware de logeo
app.use(morgan("tiny"));


app.get("/", (req, res) => {
    res.send("Hola")
})

// Middleware de rutas
app.use("/api", routes);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
