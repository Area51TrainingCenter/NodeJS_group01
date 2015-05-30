var express = require("express"),
	controller = require("../controllers/pelicula-controlador"),
	router = express.Router();

/*
	REST    CRUD	FORM METHOD
	GET		SELECT	GET
	POST	INSERT	POST
	PUT		UPDATE	POST
	DELETE	DELETE	POST
*/

router
	.get("/",controller.getAll)
	.get("/pelicula/agregar",controller.add)
	.post("/",controller.save)
	.get("/pelicula/:idpelicula",controller.get)
	.post("/pelicula/:idpelicula",controller.update)
	.post("/pelicula/:idpelicula",controller.delete)
	.use(controller.error404);