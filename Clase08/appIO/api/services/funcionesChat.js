module.exports = {

	agregarUsuario: function(socketId, usuario) {
		var encontrado=false;
		var listaUsuarios = sails.config.chat.users;

		for(var i=0; i<listaUsuarios.length; i++) {
			if(listaUsuarios[i].usuario == usuario) {
				encontrado = true;
			}
		};

		if(!encontrado) {
			sails.config.chat.users.push({socket: socketId, usuario: usuario});
		};

		console.log(sails.config.chat.users);
	}

}