var modelPelicula = require("../models/modelPeliculas"),
	controllerPelicula = function(){};

controllerPelicula.listar = function(req, res, next) {
	modelPelicula.listar(function(err, registros){
			var obj = {
				titulo: "Lista de Películas",
				data: registros
			};

			res.render("lista", obj);
	})
}	

controllerPelicula.agregar = function(req, res, next) {
	var registro = {
		titulo: req.body.titulo,
		anno: req.body.anno
	};

	modelPelicula.agregar(registro, function(err){
			if(err) {
				res.redirect("/add-form",{titulo:"Formulario de Película"});
			} else {
				res.redirect("/");
			}
	})
}	

controllerPelicula.editar = function(req, res, next) {
	var idpelicula = req.params.id;

	modelPelicula.editar(idpelicula, function(err, registro){
			if(err) {
				res.redirect("/");
			} else {
				var obj = {
					titulo: "Edición de Película",
					data:registro
				};

				res.render("editar", obj);
			}
	});
}	

controllerPelicula.actualizar = function(req, res, next) {
	var idpelicula = req.params.id;
	var registro = {
		titulo: req.body.titulo,
		anno: req.body.anno
	};

	modelPelicula.actualizar(registro, idpelicula, function(err){
			res.redirect("/");
	});	
}	

controllerPelicula.eliminar = function(req, res, next) {
	var idpelicula = req.params.id;

	modelPelicula.eliminar(idpelicula, function(err) {
			res.redirect("/");
	});
}	

controllerPelicula.mostrarFormulario = function(req, res, next) {
	var obj = {
		titulo: "Formulario de Película"
	};

	res.render("add-form", obj);	
}

module.exports = controllerPelicula;