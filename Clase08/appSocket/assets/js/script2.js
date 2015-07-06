jQuery(
	function($) {
		io.socket.on("usuario", function(obj){
			$("#mensajes").append("Verbo: '" + obj.verb + "'<br/>");	
			$("#mensajes").append("Usuario: '" + obj.data.usuario + "'<br/>");	
		});

		io.socket.get("/usuario/suscribir");
	}
)