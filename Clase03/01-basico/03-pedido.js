var express = require("express"),
	app = express();

function fnMensajeSimple(req, res) {
	res.send("Mensaje simple");
}

function fnDetalleApi(req, res) {
	res.send("Detalle de usuario: " + req.params.id);
}

function fnBusqueda(req, res) {
	res.send("Búsqueda de " + req.query.q);
}


app.get("/", fnMensajeSimple);
app.get("/usuario/:id", fnDetalleApi);
app.get("/busqueda", fnBusqueda);

app.listen(3000);

console.log("Servidor en el puerto 3000");