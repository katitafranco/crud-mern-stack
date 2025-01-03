const express = require("express");
const app = express();

//importar conexion mongoDB
const archivoBD = require("./conexion");

//Importacionn del archivo de rutas y modelo de usuario
const rutausuario = require("./rutas/usuario");

//Importar body server
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/api/usuario", rutausuario);

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor backend Node.js Corriendo...");
});
// configuracion server basico
//instalemos la dependencia nodemon

app.listen(5000, () => {
  console.log("El servidor NODE esta corriendo correctamente");
});
