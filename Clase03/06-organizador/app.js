var express = require("express"),
	path = require("path"),
	favicon = require("serve-favicon"),
	rutas = require("./routes/index"),
	dirFavicon = path.join(__dirname,"/public/images/favicon.ico"),
	dirVistas = path.join(__dirname,"/views"),
	dirPublico = express.static(path.join(__dirname, "/public")),
	motorVistas = "jade",
	puerto = (process.env.PORT || 3000),
	app = express();

app.set("views", dirVistas);
app.set("view engine", motorVistas);

app.use(favicon(dirFavicon));
app.use(dirPublico);
app.use("/", rutas);	
app.set("puerto", puerto);

module.exports = app;