const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://team-12:hackaton@cluster0.hviyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("¡Base de datos conectada!"))
  .catch((e) => console.log("ERROR"));