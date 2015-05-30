var mysql = require("mysql"),
	myconnection = require("express-myconnection"),
	opciones = {
		database: "peliculas",
		host: "localhost",
		user: "root",
		password: "malaquias",
		port: 3306
	},
	Peliculas = myconnection(mysql, opciones, "request");

module.exports = Peliculas