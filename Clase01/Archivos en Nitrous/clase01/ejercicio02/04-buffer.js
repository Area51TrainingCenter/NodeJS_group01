var buf = new Buffer(100),
	buf2 = new Buffer(26),
	str = "\u00bd + \u00bc = \u00be";

buf.write("abcd",0,4,"utf8");

console.log(buf.toString("utf8"));



console.log(
	str + ": " + 
	str.length + " caracteres, " +
		Buffer.byteLength(str,"utf8") + " bytes"
	);

for(var i = 0; i < 26; i++)
{
	buf2[i] = i + 97;
}

console.log(buf2.toString("ascii"));
