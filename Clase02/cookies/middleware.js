var express = require("express"),
    app = express();


app.use("/home",
  function(req, res, next) {
    console.log("Metodo de peticion = " + req.method);
    next();
  }
);

app.use("/home", 
  function(req, res, next) {
    console.log("Ruta en el navegador : " + req.url);
    next();
}       
)


app.get("/home", function(req, res){
  console.log("Respuesta a ruta Home");
  res.send("Estas en el home");
});

app.listen(3000);