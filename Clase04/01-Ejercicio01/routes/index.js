var express = require("express"),
	router = express.Router(),
	modelPelicula = require("../models/modelPeliculas");

function fnListarPeliculas(req, res){
	req.getConnection(function(err, modelPelicula){
		modelPelicula.query("select * from pelicula", function(err, registros){
			var obj = {
				titulo: "Lista de Películas",
				data: registros
			};

			res.render("lista", obj);
		})
	})
}

function fnFormularioAgregar(req, res) {
	var obj = {
		titulo: "Formulario de Película"
	};

	res.render("add-form", obj);
}

router.use(modelPelicula);

router.get("/", fnListarPeliculas);
router.get("/add-form", fnFormularioAgregar);

module.exports = router;	