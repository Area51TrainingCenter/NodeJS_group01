var http = require("http").createServer(serverUpload),
	util = require("util"),
	formidable = require("formidable"),
	fs   = require("fs-extra");

function serverUpload(req, res)
{
	if(req.url == "/upload" && req.method.toLowerCase() == "post")
	{
		var form = new formidable.IncomingForm();
	
		form
			.parse(req, function (err, fields, files) {
				res.writeHead(200, {"Content-Type": "text/html"});
				res.write("<h1>Archivos Recibidos</h1>"+util.inspect({files:files}));
				res.end();
			})
			.on("progress", function (bytesReceived, bytesExpected) {
				var percentComplete = (bytesReceived / bytesExpected) * 100;
				console.log(percentComplete.toFixed(2));
			})
			.on("error", function (err) {
				console.error(err);
			})
			.on("end", function (fields, files) {
				//Ubicación temporal del archivo que se sube
				var tempPath = this.openedFiles[0].path,
					// El nombre del archivo subido
					fileName = this.openedFiles[0].name,
					//Nueva ubicación
					newLocation = "./upload/";

				fs.copy(tempPath, newLocation + fileName, function (err) {  
					/*if (err)
					{
						console.error(err);
					}
					else
					{
						console.log("success!")
					}*/
					return (err)?console.error(err):console.log("success!");
				});
			});

		return;
	}

	//Mostrar el Formulario
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(
		"<form action='/upload' enctype='multipart/form-data' method='post'>"+
			"<div><input type='file' name='upload'></div>"+
			"<div><input type='submit' value='Subir'></div>"+
		"</form>"
	);
}

http.listen(3000);