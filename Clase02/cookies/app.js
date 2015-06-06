var express = require("express"),
    cookieParser = require("cookie-parser"),
    cookieSession = require("cookie-session"),
    app = express();

app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));

app.get("/", function(req, res){
  req.session.visitas || (req.session.visitas = 0);
  var n= req.session.visitas++;
  res.send("Visitas = " + n);
});

console.log("ejecutando server en 3000");

app.listen(3000);
