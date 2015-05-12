var Clock = require("./Clock");

var cucu = new Clock();

cucu.on("tictac",function(){
	cucu.theTime();
});