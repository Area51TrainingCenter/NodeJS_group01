var express = require("express"),
	app = express(),
	vistasDir = __dirname + "/vistas",
	vistasMotor = "jade",
	puerto = 3000;

function fnHome(req, res) {
	var obj = {titulo: "Página principal", usuario: "Sergio"};
	res.render("home-data", obj);
}

function fnDetalleUsuario(req, res) {
	var obj = {nombre: "Sergio", apellido: "Hidalgo"};
	res.render("detalle-data", obj);
}

function fnFormulario(req, res) {
	res.render("login-form");
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
app.get("/login", fnFormulario);
app.post("/authLogin", fnLogin);
app.get("/authLogout", fnLogout);

app.listen(3000);

console.log("Servidor en el puerto 3000");