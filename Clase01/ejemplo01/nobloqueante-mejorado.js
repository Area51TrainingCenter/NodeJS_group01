var fs = require("fs");
console.log("\nAtendiendo al cliente con la carta");

function clienteEscogioPlato(error, content){
	console.log(content)
}

var content = fs.readFile("cliente.txt","utf8", clienteEscogioPlato);

console.log("\nLe deje la carta y me pongo a atender a otro cliente\n");
console.log(process.uptime());