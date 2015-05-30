var express = require("express"),
	app = express(),
	vistasDir = __dirname + "/vistas",
	vistasMotor = "jade",
	puerto = 3000;

function fnHome(req, res) {
	res.render("home");
}

function fnDetalleUsuario(req, res) {
	res.render("detalle");
}

function fnLogin(req, res) {
	res.render("login");
}

function fnLogout(req, res) {
	res.render("logout");
}


app.set("view engine", vistasMotor);
app.set("views", vistasDir);

app.get("/", fnHome);
app.get("/usuario", fnDetalleUsuario);
app.get("/login", fnLogin);
app.get("/logout", fnLogout);

app.listen(3000);

console.log("Servidor en el puerto 3000");