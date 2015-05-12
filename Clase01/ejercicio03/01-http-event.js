var http = require("http").createServer();

function server (req,res)
{
	res.writeHead(200,{"Content-type":"text/html"});
	res.end("<h1>Navegador Web con Node.JS</h1>");
}

http.on("request",server);

http.listen(3000);
console.log("Servidor corriendo");