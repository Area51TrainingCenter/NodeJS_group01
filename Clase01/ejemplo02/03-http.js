var http = require("http");

var servidor=http.createServer(function(request, response){
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("Conectado al servidor");
	response.end();
});

servidor.listen(3000);
console.log("Servidor desde http://miservidor:3000");