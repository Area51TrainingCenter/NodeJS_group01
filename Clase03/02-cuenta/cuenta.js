var express = require("express"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session"),
	app = express();


function fnCuentaVisita(req, res) {
	req.session.cantidadVisitas || (req.session.cantidadVisitas = 0);

	res.send("Cantidad de Visitas: "+ (++req.session.cantidadVisitas));
}

app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));

app.get("/", fnCuentaVisita);

app.listen(3000);

console.log("Servidor en el puerto 3000");