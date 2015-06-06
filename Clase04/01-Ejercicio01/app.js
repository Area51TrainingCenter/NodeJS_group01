var express = require("express"),
	path = require("path"),
	favicon = require("serve-favicon"),
	faviconURL = path.join(__dirname, "/public/images/favicon.ico"),
	bodyParser = require("body-parser"),
	dirPublic = express.static(path.join(__dirname, "/public")),
	dirViews = path.join(__dirname, "/views"),
	engineView = "jade",
	routes = require("./routes/index"),
	port = (process.env.PORT || 3000),
	app = express();

app.use(favicon(faviconURL));
app.use(routes);
app.use(dirPublic);
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));

app.set("views", dirViews);
app.set("view engine", engineView);
app.set("port", port);

module.exports = app;