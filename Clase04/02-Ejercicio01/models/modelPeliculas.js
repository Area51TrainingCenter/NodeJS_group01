var conn = require("../connections/connMySQL"),
	modelPelicula = function() {};

modelPelicula.listar = function(cb) {
	conn.query("select * from pelicula", cb);
}

modelPelicula.agregar = function(registro, cb) {
	conn.query("insert into pelicula set ?", registro, cb);
}

modelPelicula.editar = function(idpelicula, cb) {
	conn.query("select * from pelicula where idpelicula = ?", idpelicula, cb);
}

modelPelicula.actualizar = function(registro, idpelicula, cb) {
	conn.query("update pelicula set ? where idpelicula = ?",[registro, idpelicula], cb);
}

modelPelicula.eliminar = function(idpelicula, cb) {
	conn.query("delete from pelicula where idpelicula=?", idpelicula, cb);
}

module.exports = modelPelicula;