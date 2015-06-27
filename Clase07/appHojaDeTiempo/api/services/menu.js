module.exports = {
	menuAdmin: [
		{label:"Resumen" , url:"/resumen"},
		{label:"Usuarios", url:"/usuarios/listar"},
		{label:"Centro de costos", url:"/centros/listar"},
		{label:"Proyectos", url:"#"},
		{label:"Tareas", url:"#"},
		{label:"Reportes", url:"#"},
		{label:"Cerrar sesión", url:"/logout"}
	],
	menuOperador: [
		{label:"Resumen" , url:"/resumen"},
		{label:"Tareas", url:"#"},
		{label:"Reportes", url:"#"},
		{label:"Cerrar sesión", url:"/logout"}
	],

	itemsMenu: function(req) {
		var rolDeUsuario = req.session.usuario.idrol.crol;
		var items;

		switch(rolDeUsuario) {
			case "ADMIN":
				items = this.menuAdmin;
				break;
			case "OPERADOR":
				items = this.menuOperador;
				break;
		};

		return items;

	}
}