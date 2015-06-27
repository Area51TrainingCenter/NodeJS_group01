/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Usuarios
			.find()
			.populate("idrol")
			.exec(function(error, registros){
				if(error) console.log(error);

				var itemsMenu = menu.itemsMenu(req);
				res.view("listaUsuarios", {registros: registros, itemsMenu: itemsMenu, layout: sails.config.recursos.layoutComun});
			});


	},

	insertar: function(req, res) {
		var dataInsercion = {};

		dataInsercion.cusuario = req.body.inputUsuario;
		dataInsercion.ccontrasena = req.body.inputContrasena;
		dataInsercion.cnombrecompleto = req.body.inputNombreCompleto;
		dataInsercion.idrol = req.body.selectRol;

		Usuarios
			.create(dataInsercion)
			.then(function(registro){
				res.redirect("/usuarios/listar");
			})

	},

	crear: function(req, res) {
		res.send("ok")
	},

	borrar: function(req, res) {
		var idusuario = req.params.id;

		Usuarios
			.destroy({idusuario: idusuario})
			.then(function(registro){
				res.redirect("/usuarios/listar");
			})

	},

	detallar: function(req, res) {
		res.send("ok")
	},

	formActualizar: function(req, res) {
		var idusuario = req.params.id;
		var registroUsuario;
		var registroRol;


		Usuarios
			.find({idusuario: idusuario})
			.populate("idrol")
			.then(function(registro){
				registroUsuario = registro;

				var filtro = {idrol: {"!": 1}};

				if(registro.length) {
					 return Roles.find(filtro);
				}
			})
			.then(function(registroRoles){
				registroRol=registroRoles;

				var itemsMenu = menu.itemsMenu(req);

				res.view("actualizarUsuario", {registro: registroUsuario[0], roles: registroRol, itemsMenu: itemsMenu, layout: sails.config.layoutComun});

			});

	},

	actualizar: function(req, res) {
		var idusuario = req.params.id,
			cusuario = req.body.inputUsuario,
			ccontrasena = req.body.inputContrasena,
			idrol = req.body.selectRol,
			cnombrecompleto = req.body.inputNombreCompleto;

		var criterioActualizacion = {idusuario: idusuario},
			dataActualizar = {cusuario: cusuario, ccontrasena: ccontrasena, cnombrecompleto: cnombrecompleto, idrol:idrol};

		Usuarios
			.update(criterioActualizacion, dataActualizar)
			.then(function(registro){
				res.redirect("/usuarios/listar");
			})
			.catch(function(err){
				console.log(err);
			});
	},

	formInsertar: function(req, res) {
		Roles
			.find()
			.then(function(roles){
				var itemsMenu = menu.itemsMenu(req);

				res.view("insertarUsuario", {roles: roles, itemsMenu: itemsMenu, layout: sails.config.layoutComun});				
			});


	}

	
};

