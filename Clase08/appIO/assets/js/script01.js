jQuery(
	function($) {

		function AgregarMensaje(msg) {
			$("#mensajes").append(msg+"<br/>");
		};

		io.socket.on("connect", function(){
			AgregarMensaje("Usuario conectado");

			io.socket.get("/usuario/conectado", function(data) {
				AgregarMensaje(data);				
			});

		});

		io.socket.on("disconnect", function(){
			AgregarMensaje("Usuario desconectado");
		});

		io.socket.on("usuario logueado", function(data){
			AgregarMensaje(data.mensaje);
		});

		io.socket.on("enviado a mi mismo", function(data) {
			AgregarMensaje(data.mensaje);
		});

		io.socket.on("mensaje a sala especifica", function(data) {
			AgregarMensaje(data);
		});


		$("#btnEnviarMensajeAMi").on("click", function(){
			var data = {};
			data.mensaje = $("#txtMensaje").val();

			io.socket.post("/usuario/mensajeAMi",data);

		});

		$("#btnUnirseSala").on("click", function(){
			var data = {};
			data.sala = $("#txtSala").val();
			data.usuario = $("#txtUsuario").val();

			io.socket.post("/usuario/unirASala/", data,function(data){
				AgregarMensaje(data.mensaje);
			});

		});		

		$("#btnEnviarSala").on("click", function(){

			var data = {};
			data.mensaje = $("#txtMensajeSala").val();
			data.sala = $("#txtSalaEspecifica").val();

			io.socket.post("/usuario/mensajeASalaEspecifica", data);
		});

		$("#btnAbandonar").on("click", function(){

			var sala = $("#txtSalaAbandonar").val();

			io.socket.get("/usuario/abandonarSala/"+sala, function(confirmacion){
				AgregarMensaje(confirmacion);
			});
		});

		$("#btnListarUnido").on("click", function(){
			io.socket.get("/usuario/salasUnidas", function(salas) {
				salas.forEach(function(sala){
					AgregarMensaje("Estás unido a la sala '"+sala+"'");
				});
			})
		});

		$("#btnUsuariosSala").on("click", function(){
			var sala = $("#txtNombreSala").val();
			io.socket.get("/usuario/cantidadSala/"+sala,function(sala) {
				AgregarMensaje("Sala: '" + sala.nombreSala + "' tiene "+ sala.cantidad + " usuario");	
			});
		});	


	}
)