var peliculaModel = require("../models/pelicula-modelo"),
	ControllerPelicula = function () {  };

ControllerPelicula.error404 = function (req, res, next)
{
	var error = new Error();
	error.status = 404;

	var locals = {
		titulo:"ERROR 404",
		descripcion:"RECURSO NO ENCONTRADO",
		error:error
	}

	res.render("error",locals);
}

ControllerPelicula.getAll = function (req, res, next)
{
	peliculaModel.getAll(function (err, rows){
		if(err)
		{
			var locals = {
				titulo:"Error al consultar la base de datos",
				descripcion:"Error de Sintaxis SQL",
				error:err
			};

			res.render("error",locals);
		}
		else
		{
			var locals = {
				titulo:"Lista de Películas",
				data:rows
			};

			res.render("index",locals);	
		}
	});
}

ControllerPelicula.add = function (req, res, next)
{
	res.render("add-form",{titulo:"Agregar Película"});
}

ControllerPelicula.save = function (req, res, next)
{
	var pelicula = {
		idpelicula:req.body.idpelicula,
		titulo:req.body.titulo,
		anno:req.body.anno
	};

	peliculaModel.save(pelicula, function (err){
		if(err)
		{
			var locals = {
				titulo:"Error al agregar el registro con id: "+pelicula.idpelicula,
				descripcion:"Error de Sintaxis SQL",
				error:err
			}

			res.render("error",locals);
		}
		else
		{	
			res.redirect("/");
		}

		console.log(err);
	});
}

ControllerPelicula.get = function (req, res, next)
{
	var idpelicula = req.params.idpelicula;

	peliculaModel.get(idpelicula, function (err, rows){
		if(err)
		{
			var locals = {
				titulo:"Error al buscar el registro con id: "+idpelicula,
				descripcion:"Error de Sintaxis SQL",
				error:err
			}

			res.render("error",locals);
		}
		else
		{
			var locals = {
				titulo:"Editar Película",
				data:rows
			};

			res.render("edit-form",locals);
		}
	});
}

ControllerPelicula.update = function (req, res, next)
{
	var pelicula = {
		idpelicula:req.body.idpelicula,
		titulo:req.body.titulo,
		anno:req.body.anno
	};

	peliculaModel.update(movie, function (err){
		if(err)
		{
			var locals = {
				titulo:"Error al actualizar el registro con id: "+pelicula.idpelicula,
				descripcion:"Error de Sintaxis SQL",
				error:err
			}

			res.render("error",locals);
		}
		else
		{
			res.redirect("/");
		}

		console.log(err);
	});
}

ControllerPelicula.delete = function (req, res, next)
{
	var idpelicula = req.params.idpelicula;

	peliculaModel.delete(idpelicula, function (err){
		if(err)
		{
			var locals = {
				titulo:"Error al eliminar el registro con id: "+idpelicula,
				descripcion:"Error de Sintaxis SQL",
				error:err
			}

			res.render("error",locals);
		}
		else
		{
			res.redirect("/");
		}

		console.log(err);
	});
}

module.exports = ControllerPelicula;