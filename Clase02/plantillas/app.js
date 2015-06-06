var express = require("express"),
    app = express();

app.set("views", __dirname + "/vistas");
app.set("view engine", "jade");

app.listen(3000);

app.get("/", function(req, res) {
  var parametros = {
    nombre: "Sergio",
    curso: "NodeJS + SailsJS"
  };
  
  res.render("home", parametros);
})