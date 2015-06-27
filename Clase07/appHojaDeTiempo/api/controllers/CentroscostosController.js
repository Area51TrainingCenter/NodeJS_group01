/**
 * CentroscostosController
 *
 * @description :: Server-side logic for managing centroscostos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Centroscostos
			.find()
			.then(function(registros) {
				var itemsMenu = menu.itemsMenu(req);
				res.view("listaCentros", {registros: registros, itemsMenu: itemsMenu, layout: sails.config.recursos.layoutComun});
			})
	},

	insertar: function(req, res) {
		var centrocosto = req.body.inputCentroCosto;

		Centroscostos
			.create({ccentrocosto: centrocosto})
			.then(function(registro){
				res.redirect("/centros/listar");
			})
	},

	actualizar: function(req, res) {
		var centrocosto = req.body.inputCentroCosto;
		var idcentrocosto = req.params.id;

		Centroscostos
			.update({idcentrocosto: idcentrocosto}, {ccentrocosto: centrocosto})
			.then(function(registro){
				res.redirect("/centros/listar");
			})
	},

	borrar: function(req, res) {
		var idcentrocosto = req.params.id;

		Centroscostos
			.destroy({idcentrocosto: idcentrocosto})
			.then(function(registro){
				res.redirect("/centros/listar");
			})
	},


	formActualizar: function(req, res) {
		var idcentrocosto = req.params.id;

		Centroscostos
			.find({idcentrocosto: idcentrocosto})
			.then(function(registro){
				var itemsMenu = menu.itemsMenu(req);

				res.view("formActualizarCentro", {registro: registro[0], itemsMenu:itemsMenu, layout:sails.config.recursos.layoutComun});
			});
	},

	formInsertar: function(req, res) {
			var itemsMenu = menu.itemsMenu(req);

			res.view("formInsertarCentro", {itemsMenu:itemsMenu, layout:sails.config.recursos.layoutComun});

	}








	
};

