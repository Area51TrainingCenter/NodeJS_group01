/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	formLogin: function(req, res) {
		res.view("login",{layout: sails.config.recursos.layoutBase});
	},

	login: function(req, res) {
		var usuario = req.body.inputUsuario,
			contrasena = req.body.inputContrasena,
			criterioBusqueda = {cusuario: usuario};

		Usuarios
			.find(criterioBusqueda)
			.populate("idrol")
			.then(function(registro){
				if(registro.length) {
					if(registro[0].ccontrasena.toUpperCase() == contrasena.toUpperCase()) {
						req.session.usuario = registro[0];
						res.redirect("/resumen");
					} else {
						return res.forbidden("Usuario inválido");
					}
				} else {
					return res.forbidden("No existe el usuario");
				}
			})
	},

	logout: function(req, res) {
		req.session.usuario = undefined;
		res.redirect("/");
	}


};

