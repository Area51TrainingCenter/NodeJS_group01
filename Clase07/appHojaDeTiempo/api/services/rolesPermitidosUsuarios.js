module.exports = {
	rolesParaUsuarios : ["ADMIN", "SUPERADMIN"],

	rolesPermitidos: function(req) {
		var rolDeUsuario = req.session.usuario.idrol.crol;
		var permitido = false;

		this.rolesParaUsuarios.forEach(function(item){
			if(item==rolDeUsuario) {
				permitido = true;
			}
		});	

		return permitido;
	}
}