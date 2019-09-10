const { Router } = require("express");
const router = Router();
const Usuarios = require("../models/usuario");

router
  .route("/usuario")
  .post((req, res) => {
    try {
      const { nombre, apellido, cedula, telefono, email } = req.body;

      if (!nombre) {
        res.send("Nombre es necesario");
      } else if (!apellido) {
        res.send("Apellido es necesario");
      } else if (!cedula) {
        res.send("Cedula es necesaria");
      } else if (!email) {
        res.send("Email es necesario");
      } else {
        let query = { nombre, apellido, cedula, email };

        if (telefono) query.telefono = telefono;

        let newUsuario = new Usuarios(query);

        newUsuario.save(err => {
          if (err) {
            res.send(err);
          } else {
            res.send("Se ha guardado satisfactoriamente");
          }
        });
      }
    } catch (err) {
      res.send(err);
    }
  })
  .get()
  .put();

module.exports = router;
