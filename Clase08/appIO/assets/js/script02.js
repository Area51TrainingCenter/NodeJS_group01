jQuery(
	function($) {

		function monitoreoUsuario(accion, usuario) {
			$("#registros").append("Accion: "+accion);
			$("#registros").append("Usuario: "+usuario);
		}

		io.socket.on("usuario", function(obj){
			//monitoreoUsuario(obj.verb, obj.data.nombre);
			if(obj.verb=="updated") {
				$("tr[rel="+obj.data.idUsuario+"]").addClass("fondoAmarillo");
			};

			if(obj.verb=="destroyed") {
				alert(obj.data);
				$("tr[rel="+obj.id+"]").addClass("fondoRojo");
			}
		});


		io.socket.get("/usuario/suscribir");
	}
)