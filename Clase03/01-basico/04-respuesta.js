var express = require("express"),
	app = express();

function fnRedireccion(req, res) {
	res.redirect(301, "http://www.google.com");
}

function fnRespuestaJSON(req, res) {
	var obj = {
		nombreCompleto: "Sergio Hidalgo",
		cargo: "Profesor"
	};

	res.json(obj);
}


app.get("/redireccion", fnRedireccion);
app.get("/json", fnRespuestaJSON);

app.listen(3000);

console.log("Servidor en el puerto 3000");