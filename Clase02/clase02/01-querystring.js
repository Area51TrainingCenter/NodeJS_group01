var http=require("http"),
    url=require("url"),
    querystring=require("querystring");


function servidor(req, res) {
  var json = querystring.parse(url.parse(req.url).query);
 
  console.log(url.parse(req.url, true));
  
  
  res.writeHead(200, {"content-type": "text/plain"});
  res.end(req.url);

}

http.createServer(servidor).listen(3000);

console.log("Servidor ejecutándose");