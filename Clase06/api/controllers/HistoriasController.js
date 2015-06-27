/**
 * HistoriasController
 *
 * @description :: Server-side logic for managing historias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Historias
			.find()
			.then(function(registros){
				res.json(registros);
			})
	},

	insertar: function(req, res) {
		var obj = {};
		obj.nombrePaciente = req.body.nombrePaciente;
		obj.dni = req.body.dni;
		obj.idMedico = req.body.idMedico;

		Historias
			.create(obj)
			.then(function(resultado){
				RegistroLogService.Insertar(req, "historias", "I", resultado.idHistoria);
				res.json(resultado);

				/*var medicinas = [
					{idMedicina: 1, idHistoria: resultado.idHistoria},
					{idMedicina:34, idHistoria: resultado.idHistoria}
				];


				return HistoriaMedicinas.create(medinas);
			})
			.then(function(medicinaIngresadas){
				res.send("Todo está ok");*/
			})

	},

	modificar: function(req, res) {
		var obj = {};
		obj.nombrePaciente = req.body.nombrePaciente;
		obj.dni = req.body.dni;
		obj.idMedico = req.body.idMedico;

		var filtro = {idHistoria: req.param("id")};

		Historias
			.update(filtro,obj)
			.then(function(resultado){
				RegistroLogService.Insertar(req, "historias", "M", resultado.idHistoria);
				res.json(resultado);
			})
	},

	borrar: function(req, res) {
		var filtro = {idHistoria: req.param("id")};

		Historias
			.destroy(filtro)
			.then(function(resultado){
				RegistroLogService.Insertar(req, "historias", "D", resultado.idHistoria);
				res.json(resultado);
			});
	}	
};

