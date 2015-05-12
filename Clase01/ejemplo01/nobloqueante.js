var fs = require("fs");
console.log("\nAtendiendo al cliente con la carta");

var content = fs.readFile("cliente.txt","utf8", function(error, content){
	console.log(content);
});

console.log("\nLe deje la carta y me pongo a atender a otro cliente\n");
console.log(process.uptime());