var PacienteControlador = (
	function(){

			var listaPacientes = [
				{idPaciente: 1, nombre: "Sergio"},
				{idPaciente: 2, nombre: "Carmen"},
				{idPaciente: 3, nombre: "Andrea"},
				{idPaciente: 4, nombre: "Javier"}
			];


		function Listado(){

			return listaPacientes;

		};

		function InsertarPaciente(obj){}

		function ActualizaPaciente(obj){}

		function BorraPaciente(obj){}

		function DetallePaciente(obj){}


	}
)

module.exports = PacienteControlador;