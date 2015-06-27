/**
 * MedicosController
 *
 * @description :: Server-side logic for managing medicos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	insertar: function(req, res) {
		var registro = {};
		registro.nombre = req.body.nombre;
		registro.apellido = req.body.apellido;

		Medicos
			.create(registro)
			.then(function(resultado) {
				RegistroLogService.Insertar(req, "medicos", "I", resultado.idMedico);
				res.send("Todo ok");
			});
	}
	
};

