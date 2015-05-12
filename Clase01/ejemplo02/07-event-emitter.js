var EventEmitter = require("events").EventEmitter,
	pub = new EventEmitter();

pub.on("theEventOfJon", function(message) {
 	console.log(message);
});

pub.once("theEventOfJon", function(message) {
	console.log("Se emite la primera vez");
});

pub.emit("theEventOfJon", "Soy un Emisor de Eventos");
pub.emit("theEventOfJon", "Volviendo a emitir 2");
pub.removeAllListeners("theEventOfJon");
pub.emit("theEventOfJon", "Volviendo a emitir 3");