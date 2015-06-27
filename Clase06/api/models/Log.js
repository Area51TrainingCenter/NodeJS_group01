/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection:'connMySQL',
  tableName: 'log',
  attributes: {
  	idLog: {
  		type:"integer",
  		primaryKey: true,
  		autoIncrement: true
  	},

  	idUsuario: {
  		model: 'usuario'
  	},

  	accion: {
  		type:"string",
  		size: 1,
  		required: true
  	},

  	registro:{
  		type: "integer",
  		required:true
  	},

  	tabla: {
  		type:"string",
  		required: true
  	}
  }
};

