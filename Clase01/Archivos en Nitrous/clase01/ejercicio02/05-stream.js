var fs = require("fs"),
	readStream = fs.createReadStream("./paises.txt"),
	writeStream = fs.createWriteStream("./paises-copia.text");

//readStream.pipe(process.stdout);

readStream.pipe(writeStream);

readStream.on("data", function (chunk){
	console.log("He leído:",chunk.length,"caracteres");
});

readStream.on("end", function() {
	console.log("terminé");
});