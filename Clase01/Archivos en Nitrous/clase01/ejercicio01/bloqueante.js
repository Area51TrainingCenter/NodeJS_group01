var fs = require("fs");
console.log("\nAtendiendo al cliente con la carta");

var content = fs.readFileSync("cliente.txt","utf8");
console.log(content);

console.log("\nTermine con el cliente y ahora atiendo a otro\n");
console.log(process.uptime());