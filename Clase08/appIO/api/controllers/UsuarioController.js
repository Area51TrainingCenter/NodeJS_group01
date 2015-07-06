/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	suscribir: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		Usuario.watch(req);

		Usuario
			.find({})
			.then(function(reg){
				Usuario.subscribe(req.socket, reg);
			});

	},

	insertar: function(req, res) {
		var data = req.allParams();

		Usuario
			.create({nombre: data.nombre})
			.then(function(registro){
				Usuario.publishCreate(registro);
				res.send("ok");
			});
	},

	listar: function(req, res) {
		Usuario
			.find({})
			.then(function(registros) {
				var data={};
				data.lista = registros;

				res.view("monitoreo", data);
			})
	},

	actualizar: function(req, res) {
		var data = req.allParams();
		var registro = {nombre: data.nombre};
		var filtro = {idUsuario: req.param("idUsuario")};

		Usuario
			.update(filtro, registro)
			.then(function(reg){
				Usuario.publishUpdate(reg[0].idUsuario, reg[0]);
				res.send("ok");
			})
	},
	
	eliminar: function(req, res) {
		var data = req.allParams();
		var filtro = {idUsuario: req.param("idUsuario")};
		var idUsuario = req.param("idUsuario")

		Usuario
			.destroy(filtro)
			.then(function(reg){
				console.log(reg);
				Usuario.publishDestroy(idUsuario);
				res.send("ok");
			})
	},	
	conectado: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		console.log("Usuario conectado a travès de la acción 'conectado'");

		var mensaje = "Bienvenido";

		var socketId = sails.sockets.id(req.socket);
		sails.sockets.emit(socketId, "usuario logueado", {mensaje: mensaje});
	},

	mensajeAMi: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var data = req.allParams();
		
		var mensajeRecibido = data.mensaje;
		var socketId = sails.sockets.id(req.socket);
		sails.sockets.blast("enviado a mi mismo", {mensaje: mensajeRecibido}, req.socket);
	},

	unirASala: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var data = req.allParams();
		var sala = data.sala;
		var usuario = data.usuario;
		var socketId = sails.sockets.id(req.socket);

		sails.sockets.join(req.socket, sala);

		funcionesChat.agregarUsuario(socketId, usuario);

		var data = {};
		data.mensaje = "Te has unido a la sala '" + sala + "'";

		res.json(data);
	},

	mensajeASalaEspecifica: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var data = req.allParams();
		var sala = data.sala;
		var mensaje = data.mensaje;

		sails.sockets.broadcast(sala, "mensaje a sala especifica", mensaje);
	},

	abandonarSala: function(req, res) {
		if(!req.isSocket) return res.badRequest();	

		var sala = req.param("nombreSala");

		sails.sockets.leave(req.socket, sala);

		res.send("Ok. Te saliste de la sala '" + sala + "'");

	},

	salasUnidas: function(req, res) {
		if(!req.isSocket) return res.badRequest();	

		var salas = sails.sockets.socketRooms(req.socket);

		console.log(salas)

		res.send(salas);
	},

	cantidadSala: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var sala = req.param("nombreSala");

		var lista = sails.sockets.subscribers(sala);

		console.log(lista);

		var data = {};
		data.nombreSala = sala;
		data.cantidad = lista.length;
		res.json(data);
	}	

};

