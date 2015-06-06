var express = require("express"),
	router = express.Router(),
	controllerPelicula = require("../controllers/controllerPelicula");

router.get("/", controllerPelicula.listar);
router.get("/add-form", controllerPelicula.mostrarFormulario);
router.post("/", controllerPelicula.agregar);
router.get("/edit/:id", controllerPelicula.editar);
router.post("/update/:id", controllerPelicula.actualizar);
router.get("/delete/:id", controllerPelicula.eliminar);

module.exports = router;	