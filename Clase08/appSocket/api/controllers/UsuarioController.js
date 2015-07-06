/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	login: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var respuesta = {};
		respuesta.socketId = sails.sockets.id(req.socket);

		var mensaje = "usuario con id="+respuesta.socketId;

		sails.sockets.emit(respuesta.socketId, "usuario logueado", {mensaje: mensaje});

		return res.json(respuesta);

	},

	notificarTodos: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var data = req.allParams();

		sails.sockets.blast("mensaje desde el servidor", data);

	},

	unirseSala: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var sala = req.param("nombreSala");

		sails.sockets.join(req.socket, sala);

		res.json({sala: sala});

	},

	listarSalas: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var salas = sails.sockets.rooms();
		res.json(salas);

	},

	abandonarSala: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var sala = req.param("nombreSala");
		sails.sockets.leave(req.socket, sala);

		var salaAbandonada = {sala: sala};

		res.json(salaAbandonada);
	},

	enviarMensajeSala: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var data = req.allParams();
		var sala = req.param("nombreSala");
		var mensaje = data.mensaje;

		sails.sockets.broadcast(sala, "mensaje a sala", data, req.socket);
	},

	listarSalasUnido: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var salas = sails.sockets.socketRooms(req.socket);

		res.json(salas);
	},

	usuariosSalas: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		var sala = req.param("nombreSala");

		var lista = sails.sockets.subscribers(sala);

		var data = {};
		data.nombreSala = sala;
		data.cantidad = lista.length;
		res.json(data);
	},

	suscribir: function(req, res) {
		if(!req.isSocket) return res.badRequest();

		Usuario.watch(req);
        console.log('User with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'users\'.');

	},

	crearUsuario: function(req, res) {
		var data = req.allParams();

		var usuario = data.nombre;

		Usuario
			.create({usuario: usuario})
			.then(function(registro){
				Usuario.publishCreate(registro);

				res.send("ok");
			})
	}



};

