var express = require("express"),
    path = require("path"),
    dirVistas = path.join(__dirname, "/vistas"),
    motorVistas = "jade",
    app = express();

function fnLista(req, res){
  var obj ={
    titulo: "Lista de usuarios",
    data:[
      {nombre:"Sergio", apellido:"Hidalgo"},
      {nombre:"Andrea", apellido:"Véliz"},
      {nombre:"Mónica", apellido:"Tazza"}
    ]
  }
  res.render("lista", obj);
}

app.set("views", dirVistas);
app.set("view engine", motorVistas);
app.get("/lista", fnLista);

app.listen(3000);
console.log("Servidor en puerto 3000");