var app = require("./app");

var server = app.listen(app.get("port"), function(){
	console.log("Servidor corriendo en el puerto " + app.get("port"));
})