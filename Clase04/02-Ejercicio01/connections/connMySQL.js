var mysql = require("mysql"),

	opciones = {
		host: "localhost",
		database: "peliculas",
		user: "root",
		password: "malaquias",
		port: 3306
	},
	myconnection = mysql.createConnection(opciones);

	myconnection.connect(function(err){
		if(err) {
			console.log("Error: " + err.stack);
		} else {
			console.log("MySQL conectado con el pid: " + myconnection.threadId);
		}
	});

module.exports = myconnection;
