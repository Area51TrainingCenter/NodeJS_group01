var express = require("express"),
	rutas = express.Router(),
	peliculas = require("../models/peliculas");

function error404(req, res, next)
{
	var error = new Error();
	error.status = 404;

	var obj = {
		titulo: "ERROR 404",
		descripcion:"RECURSO NO ENCONTRADO",
		error:error
	}

	res.render("error",obj);
}


rutas.use(peliculas);

rutas.get("/", function (req, res){
	req.getConnection(function (err, peliculas){
		peliculas.query("SELECT * FROM pelicula", function (err, registros){
			var obj = {
				titulo:"Lista Películas",
				registros:registros
			};
			res.render("lista",obj);
		});
	});
});

rutas.post("/",function (req, res){
	req.getConnection(function (err, peliculas){
		var pelicula = {
			titulo:req.body.titulo,
			anno:req.body.anno
		};

		peliculas.query("INSERT INTO pelicula SET ?", pelicula, function (err, rows){
			return (err)?res.redirect("/agregar"):res.redirect("/");
		});
	});
});

rutas.get("/editar/:idpelicula",function (req, res){
	var idpelicula = req.params.idpelicula;

	req.getConnection(function (err, peliculas){
		peliculas.query("SELECT * FROM pelicula WHERE idpelicula = ?", idpelicula, function (err, rows){
			var locals = {
				title:"Editar Película",
				data:rows
			};
			res.render("edit-form",locals);
		});
	});
});

router.post("/actualizar/:idpelicula",function (req, res){
	var idpelicula = req.params.idpelicula;

	req.getConnection(function (err, movies){
		var pelicula = {
			titulo:req.body.titulo,
			anno:req.body.anno
		};

		peliculas.query("UPDATE pelicula SET ? WHERE idpelicula = ?", [pelicula, idpelicula], function (err, rows){
			return (err)?res.redirect("/actualizar/:idpelicula"):res.redirect("/");
		});
	});
});

router.post("/eliminar/:idpelicula",function (req, res, next){
	req.getConnection(function (err, movies){
		var idpelicula = req.params.idpelicula;

		movies.query("DELETE FROM pelicula WHERE idpelicula = ?", idpelicula, function (err, rows){
			return (err)?next(new Error("Registro No encontrado")):res.redirect("/");
		});
	});
});


rutas.use(error404);

module.exports = rutas;	