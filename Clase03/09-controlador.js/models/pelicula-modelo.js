var peliculaModel  = require("./pelicula-esquema"),
	Pelicula = function () {};

Pelicula.getAll = function (cb)
{
	peliculaModel.query("SELECT * FROM pelicula",cb);
}

Pelicula.save = function (data, cb)
{
	var sql = "INSERT INTO pelicula SET ?";
	peliculaModel.query(sql, data, cb);
}

Pelicula.get = function (id, cb)
{
	var sql = "SELECT * FROM pelicula WHERE idpelicula = ?";
	peliculaModel.query(sql, id, cb);
}

Pelicula.update = function (data, cb)
{
	var sql = "UPDATE pelicula SET ? WHERE idpelicula = ?";
	peliculaModel.query(sql, [data, data.idpelicula], cb);
}

Pelicula.delete = function (id, cb) 
{
	var sql = "DELETE FROM pelicula WHERE idpelicula = ?";
	peliculaModel.query(sql, id, cb);
}

module.exports = Pelicula;