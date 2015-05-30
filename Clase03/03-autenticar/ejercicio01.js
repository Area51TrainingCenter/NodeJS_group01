var express = require("express"),
    cookieParser = require("cookie-parser"),
    cookieSession = require("cookie-session"),
    path = require("path"),
    app = express();

function fnFormularioLogin(req, res){
  res.sendFile(path.join(__dirname,"/vistas/formulario.html"));
}

function fnLogin(req, res) {
  var usuario = req.query.usuario,
      contrasena = req.query.contrasena;
  
  if(usuario=="sergio" &&  contrasena=="abcd") {
    var obj = {
      nombre: usuario,
      rol: "administrador"
    };
    req.session.usuario = obj;
    res.redirect("/listado");
    
  } else if(usuario=="jose" && contrasena=="papa") {
    var obj = {
      nombre: usuario,
      rol: "editor"
    };
    req.session.usuario = obj;
    res.send("Usuario autenticado pero no autorizado");    
  } else {
    res.redirect("/denegado");
  }
 
}

function fnListado(req, res) {
  if(!req.session.usuario) {
    res.redirect("/denegado");
  } else if(req.session.usuario.rol!="administrador") {
    res.redirect("/denegado");
  }
  
  res.sendFile(path.join(__dirname, "/vistas/listado.html"));
}

function fnDenegado(req, res) {
  res.sendFile(path.join(__dirname, "/vistas/denegado.html"));
}

function fnDesloguearse(req, res) {
  req.session.usuario = null;
  res.redirect("/");
}

function fnErrorNoEncontrado(req, res, next) {
  var error = new Error();
  res.status = "404";
  res.send("Página no encontrada");
}

app.use(cookieParser());
app.use(cookieSession({secret: "12345"}));

app.get("/", fnFormularioLogin);
app.get("/login", fnLogin);
app.get("/listado", fnListado);
app.get("/denegado", fnDenegado);
app.get("/logout", fnDesloguearse);

app.use(fnErrorNoEncontrado);

app.listen(3000);
console.log("Servidor en puerto 3000");
