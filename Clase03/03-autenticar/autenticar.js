var express = require("express"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session"),
	app = express();

function fnHome(req, res){
	res.send("Loguearse en <a href='/login?usuario=sergio&contrasena=12345'>Login</a>");
}

function fnLoguearse(req, res) {
	var usuario = req.query.usuario;
	var contrasena = req.query.contrasena;

	if(usuario=="sergio" && contrasena=="12345") {
		var objUsuario = {
			usuario: usuario,
			rol: "administrador"
		}
		req.session.usuario = objUsuario;
		res.send("Logueado");
	} else if(usuario=="jose" && contrasena=="1234"){
		var objUsuario = {
			usuario: usuario,
			rol: "editor"
		};
		req.session.usuario = objUsuario;
		res.send("Logueado");
	} else {
		res.redirect("/denegado");
	}	
}

function fnDesloguearse(req, res) {
	req.session.usuario = null;
	res.send("Deslogueado");
}

function fnDenegado(req, res) {
	res.send("<h1>No tiene acceso</h1>");
}

function fnListaUsuarios(req, res) {
	if(!req.session.usuario) {
		res.redirect("/denegado");
	} else {
		var objUsuario;
		var id = req.params.id;

		if(req.session.usuario.rol=="administrador") {
			objUsuario = {
				id: id,
				nombre: "Sergio"
			};
		}

		if(req.session.usuario.rol=="editor") {
			objUsuario = {
				id: id,
				nombre: "José"
			};
		}

		res.json(objUsuario);

	}
}



app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));

app.get("/", fnHome);
app.get("/login", fnLoguearse);
app.get("/logout", fnDesloguearse);
app.get("/denegado", fnDenegado);
app.get("/usuario/:id", fnListaUsuarios);


app.listen(3000);

console.log("Servidor en el puerto 3000");