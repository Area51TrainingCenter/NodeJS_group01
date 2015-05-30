var express = require("express"),
	rutas = express.Router();

function fnHome(req, res, next) {
	res.render("home");
}

function fnContacto(req, res, next) {
	res.render("contacto");
}

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

rutas.get("/", fnHome);
rutas.get("/contacto", fnContacto);

rutas.use(error404);


module.exports = rutas;	