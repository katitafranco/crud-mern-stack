const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String,
});

const ModeloUsuario = mongoose.model("usuario", eschemausuario);
module.exports = router;

/* 
//ejemplo de prueba
router.get("/ejemplo", (req, res) => {
  res.end("Saludo carga desde ruta ejemplo");
});
 */

//Agregar Usuario

router.post("/agregarusuario", async (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });

  /* ya nno se usa callback este codigo se debio cambiar
  nuevousuario.save(function (err) {
    if (!err) {
      res.send("Usuario agregado correctamenet");
    } else {
      res.send(err);
    }
  }); */

  try {
    await nuevousuario.save();
    res.send("Usuario agregado  correctamente");
  } catch (err) {
    res.status(500).send(err);
  }
});

//Obtner todos los usuarios

/* router.get("/obtenerusuarios", (req, res) => {
  ModeloUsuario.fin({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
 */
//Obtner todos los usuarios

router.get("/obtenerusuarios", async (req, res) => {
  try {
    const usuarios = await ModeloUsuario.find({});
    res.send(usuarios);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Obtener data de usuario
router.post("/obtenerdatausuario", async (req, res) => {
  try {
    const usuario = await ModeloUsuario.find({ idusuario: req.body.idusuario });
    res.send(usuario);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Actualiza el usuario

// Actualiza el usuario
router.post("/actualizausuario", async (req, res) => {
  try {
    const usuarioActualizado = await ModeloUsuario.findOneAndUpdate(
      { idusuario: req.body.idusuario }, // Filtro para encontrar el usuario por id
      {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
      },
      { new: true } // Esta opción devuelve el documento actualizado
    );

    if (!usuarioActualizado) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.send("Usuario actualizado correctamente");
  } catch (err) {
    res.status(500).send(err);
  }
});

//Eliminar usuario

router.post("/borrarusuario", async (req, res) => {
  try {
    const usuarioEliminado = await ModeloUsuario.findOneAndDelete({
      idusuario: req.body.idusuario,
    });

    if (!usuarioEliminado) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.send("Usuario eliminado correctamente");
  } catch (err) {
    res.status(500).send(err);
  }
});
