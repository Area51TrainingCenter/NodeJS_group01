var EventEmitter = require("events").EventEmitter,
	pub = new EventEmitter();

 pub.on("actualizar", function(msg){
   console.log("Actualizado: " + msg);
 });
 
 pub.once("actualizar", function(msg){
   console.log("solo se ejecuta una vez");
 });


setInterval(
  function(){
    pub.emit("actualizar", "sr. Dávila");
  },
  2000
);

 

