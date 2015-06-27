module.exports = {
	Insertar: function(req, tabla, accion, registro) {
			var obj = {};
			//obj.idUsuario = req.session.usuario.idUsuario;
			obj.idUsuario = 1;
			obj.accion = accion;
			obj.registro = registro;
			obj.tabla = tabla;

			Log
				.create(obj, function(err){
					if(err) console.log(err);
					console.log("Registro insertado en el modelo Log");
				})
	}
}