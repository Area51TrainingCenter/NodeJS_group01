/**
* Historias.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: "connMySQL",
  tableName: "historias",
  attributes: {
  	idHistoria: {
  		type:"integer",
  		primaryKey: true,
      autoIncrement:true
  	},

  	nombrePaciente: {
  		type:"string",
  		required: true
  	},

  	dni: {
  		type:"string",
  		required: true,
  		unique: true
  	},

  	idMedico: {
  		model: "medicos"
  	}
  }
};

