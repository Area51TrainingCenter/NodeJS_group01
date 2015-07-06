jQuery(
	function($) {

		io.socket.on("connect", function(){
			io.socket.get('/logueado', function(data) {
				console.log(data);
			});
		});


		io.socket.on("disconnect", function(){
			console.log("desconectado");
		});

		io.socket.on("usuario logueado", function(data){
			console.log(data);
		});

		io.socket.on("mensaje desde el servidor", function(data){
			$("#mensajes").append(data.mensaje+"<br/>");
		});

		io.socket.on("mensaje a sala", function(data){
			$("#mensajes").append(data.mensaje+"<br/>");
		});



		$("#btnEnviar").on("click", function(){
			var data = {};
			data.mensaje=$("#txtMensaje").val();

			io.socket.post("/notificarTodos",data);
			$("#txtMensaje").val("");
		});

		$("#btnUnirseSala").on("click", function(){
			var sala=$("#txtSala").val();

			io.socket.get("/unirseSala/"+sala,function(respuesta) {
				$("#mensajes").append("Te has unido a la sala '" + respuesta.sala + "'<br/>");
			});
			$("#txtSala").val("");
		});

		$("#btnListarSalas").on("click", function(){
			io.socket.get("/listarSalas/",function(lista) {
				lista.forEach(function(item){
					$("#mensajes").append("Sala: '" + item + "'<br/>");	
				})
				
			});
		});

		$("#btnAbandonar").on("click", function(){
			var sala = $("#txtSalaAbandonar").val();

			io.socket.get("/abandonarSala/"+sala,function(respuesta) {
				$("#mensajes").append("Abandonaste la sala: '" + respuesta.sala + "'<br/>");	
			});
			$("#txtSalaAbandonar").val("");
		});

		$("#btnEnviarSala").on("click", function(){
			var sala = $("#txtSalaEspecifica").val();
			var data = {};
			data.mensaje = $("#txtMensajeSala").val();

			io.socket.post("/enviarMensajeSala/"+sala, data);
			$("#txtMensajeSala").val("");
		});	

		$("#btnListarUnido").on("click", function(){
			io.socket.get("/listarSalasUnido/",function(lista) {
				lista.forEach(function(item){
					$("#mensajes").append("Unido a la sala: '" + item + "'<br/>");	
				})
				
			});
			$("#txtSala").val("");
		});	


		$("#btnUsuariosSala").on("click", function(){
			var sala = $("#txtNombreSala").val();
			io.socket.get("/usuariosSalas/"+sala,function(sala) {
				$("#mensajes").append("Sala: '" + sala.nombreSala + "' tiene "+ sala.cantidad + " usuario <br/>");	
			});
		});				



	}
)

