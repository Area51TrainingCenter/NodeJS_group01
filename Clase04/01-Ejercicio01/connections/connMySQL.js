var mysql = require("mysql"),

	opciones = {
		host: "localhost",
		database: "peliculas",
		user: "root",
		password: "malaquias",
		port: 3306
	},
	myconnection = require("express-myconnection"),
	Peliculas = myconnection(mysql, opciones, "request");

module.exports = Peliculas;
