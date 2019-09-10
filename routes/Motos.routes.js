const { Router } = require("express");
const router = Router();
const motos = require("../models/Motos");

router;

router
  .route("/tipomotos")
  .post((req, res) => {
    let { nombreM, modelo, colores, valor } = req.body;
    try {
      if (!nombreM) {
        res.send("El nombre de la moto es necesario");
      } else if (!modelo) {
        res.send("El modelo es necesario");
      } else if (!colores) {
        res.send("El color es necesario");
      } else if (!valor) {
        res.send("El valor es necesario");
      } else {
        let query = { nombreM, modelo, colores, valor };

        let newMoto = new motos(query);

        newMoto.save(err => {
          err ? res.send(err) : res.send("Se ha guardado satisfactoriamente");
        });
      }
    } catch (error) {}
  })
  .get((req, res) => {
    try {
      motos.find().exec((err, result) => {
        err ? res.send(err) : res.send(result);
      });
    } catch (err) {
      res.send(err);
    }
  });

router.route("/motos/:compra").post((req, res) => {
  try {
    let idCompra = req.params.compra;
    // motos.find({ _id: idCompra }).exec((err, result) => {
    //   err ? res.send(err) : res.send(result);
    // });

    motos.update({ _id: idCompra }, { $set: { modelo: 2019 } }, err => {
      err ? res.send(err) : res.send(`has comprado la moto`);
    });
  } catch (err) {
    res.send(err);
  }
});

router.route("/motos/:id").delete((req, res) => {
  try {
    let idelete = req.params.borrar;
    motos.delete({ _id: idelete }, { $set: { query } }, err => {
      err ? res.send(err) : res.send("borrado");
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
