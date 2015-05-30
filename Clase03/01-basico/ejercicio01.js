var express = require("express"),
    app = express();

function fnLogin(req, res) {
  res.sendFile(__dirname + "/vistas/login.html");
}

function fnPeliculas(req, res) {
  res.sendFile(__dirname + "/vistas/peliculas.html");
}

function fnDetallePelicula(req, res) {
  var idpelicula = req.params.idpelicula;
  console.log("Pelicula ID: " + idpelicula);
  res.sendFile(__dirname + "/vistas/detalle.html");
}

function fnDesloguearme(req, res){
  res.sendFile(__dirname+"/vistas/logout.html");
}

function fnBusquedas(req, res){
  var termino=req.query.q;
  console.log("Término de búsqueda: " + termino);
  res.sendFile(__dirname + "/vistas/busquedas.html");
}

function fnGeneros(req, res){
  res.sendFile(__dirname + "/vistas/generos.html");
}

app.get("/", fnLogin);
app.get("/peliculas", fnPeliculas);
app.get("/peliculas/:idpelicula", fnDetallePelicula);
app.get("/logout", fnDesloguearme);
app.get("/busquedas", fnBusquedas);
app.get("/generos", fnGeneros);


app.listen(3000);
console.log("Servidor en el puerto 3000");