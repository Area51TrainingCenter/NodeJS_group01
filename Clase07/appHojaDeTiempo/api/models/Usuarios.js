/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: "usuarios",
  attributes: {

  	idusuario: {
  		type: 'integer',
  		primaryKey: true,
  		unique: true,
  		autoIncrement: true
  	},

  	cusuario: {
  		type:"string",
  		required: true
  	},

  	ccontrasena: {
  		type:"string",
  		required: true
  	},

  	cnombrecompleto: { 		
  		type:"string",
  		required: true
  	},

  	idrol:{
  		model: "roles"
  	}



  }
};

