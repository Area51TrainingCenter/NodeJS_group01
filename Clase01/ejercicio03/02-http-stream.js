var http = require("http").createServer(server),
	fs = require("fs"),
	index = fs.createReadStream("./webs/index.html");

function server (req,res)
{
	res.writeHead(200,{"Content-type":"text/html"});
	index.pipe(res);
}

http.listen(3000);
console.log("Servidor corriendo");