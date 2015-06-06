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

function fnAgregarPelicula(req, res) {
	var obj = {
		titulo: req.body.titulo,
		anno: req.body.anno
	};

	req.getConnection(function(err, modelPelicula) {
		modelPelicula.query("insert into pelicula set ?", obj, function(err){
			if(err) {
				res.redirect("/add-form",{titulo:"Formulario de Película"});
			} else {
				res.redirect("/");
			}
		})
	});
}

function fnEditarPelicula(req, res) {
	var idpelicula = req.params.id;

	req.getConnection(function(err, modelPelicula) {
		modelPelicula.query("select * from pelicula where idpelicula = ?", idpelicula, function(err, registro){
			if(err) {
				res.redirect("/");
			} else {
				var obj = {
					titulo: "Edición de Película",
					data:registro
				};

				res.render("editar", obj);
			}
		})
	});
}

function fnActualizarPelicula(req, res){
	var idpelicula = req.params.id;
	var registro = {
		titulo: req.body.titulo,
		anno: req.body.anno
	};

	req.getConnection(function(err, modelPelicula){
		modelPelicula.query("update pelicula set ? where idpelicula = ?", [registro, idpelicula], function(err){
			res.redirect("/");
		})
	})
}

function fnEliminarPelicula(req, res) {
	var idpelicula = req.params.id;

	req.getConnection(function(err, modelPelicula) {
		modelPelicula.query("delete from pelicula where idpelicula = ?", idpelicula, function(err) {
			res.redirect("/");
		})
	});
}

router.use(modelPelicula);

router.get("/", fnListarPeliculas);
router.get("/add-form", fnFormularioAgregar);
router.post("/", fnAgregarPelicula);
router.get("/edit/:id", fnEditarPelicula);
router.post("/update/:id", fnActualizarPelicula);
router.get("/delete/:id", fnEliminarPelicula);

module.exports = router;	