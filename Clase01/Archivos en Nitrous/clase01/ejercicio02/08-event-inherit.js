var EventEmitter = require("events").EventEmitter,
	inherits = require("util").inherits;

var Clock = function(){
	var self = this;
  	setInterval(function(){
    	self.emit("tictac");
  	},1000);
}

inherits(Clock,EventEmitter);

Clock.prototype.theTime = function(){
	var date = new Date(),
		hrs = date.getHours(),
		hrsAMPM = (hrs>12)?(hrs-12):hrs,
		hrsZero = addZero(hrsAMPM),
		min = date.getMinutes(),
		minZero = addZero(min),
		sec = date.getSeconds(),
		secZero = addZero(sec),
		ampm = (hrs < 12)?"am":"pm",
		msg = hrsZero+":"+minZero+":"+secZero+ampm;

		function addZero(num)
		{

			return (num<10)?"0"+num:num;
		}

		console.log(msg);
}

var cucu = new Clock();

cucu.on("tictac",function(){
	cucu.theTime();
});