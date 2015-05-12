var http = require("http");

function server(request, response){
	response.writeHead(200,{"Content-type":"text/html"});
	response.end("<h1>Conectado al servidor</h1>");
}

http.createServer(server).listen(3000);
console.log("Servidor desde http://miservidor:3000");