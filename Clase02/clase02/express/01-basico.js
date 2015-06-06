var express = require("express"),
    app = express();

var usuarios = [
  {id:1, nombre:"Sergio"},
  {id:2, nombre:"Karla"},
  {id:3, nombre:"Marjorie"}
];


app.get("/", function(req, res){
  res.send("<h1>Hola estás en el Home");
});

app.get("/contacto", function(req, res){
  res.sendFile(__dirname + "/archivos/contacto.html");
});

app.get("/google", function(req, res){
  res.redirect("http://www.google.com");
});

app.get("/descargar", function(req, res){
  res.download(__dirname +  "/archivos/contacto.html");
})

app.get("/usuario/:id", function(req, res){

  usuarios.forEach(function(item){
    if(item.id==req.params.id) {
      res.json(item);
    }
  })
  
})

app.get("/usuario", function(req, res){
  res.json(usuarios);
})

app.get("/lista", function(req, res){
  res.sendFile(__dirname + "/archivos/directorio.html");
})






app.listen(3000);

console.log("ejecutando express en el puerto 3000");