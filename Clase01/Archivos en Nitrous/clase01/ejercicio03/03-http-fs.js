var http = require("http").createServer(server),
	fs = require("fs");

function server (req,res)
{
	function readFile(err,data)
	{
		if(err) throw err;
		res.end(data);
	}
	
	res.writeHead(200,{"Content-type":"text/html"});
	fs.readFile("./webs/index.html",readFile);
}

http.listen(3000);
console.log("Servidor corriendo");