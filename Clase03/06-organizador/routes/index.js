var express = require("express"),
	rutas = express.Router();

function fnHome(req, res, next) {
	res.render("home");
}

function fnContacto(req, res, next) {
	res.render("contacto");
}

rutas.get("/", fnHome);
rutas.get("/contacto", fnContacto);

module.exports = rutas;	