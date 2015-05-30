var express = require("express"),
	app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/html/hola.html");
});

app.listen(3000);

console.log("Servidor en puerto 3000");