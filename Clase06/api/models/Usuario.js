/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'connMySQL',
  tableName: 'usuario',
  attributes: {
  	idUsuario: {
  		type:'integer',
  		primaryKey:true,
  		autoIncrement: true
  	},

  	nombre: {
  		type: 'string',
  		required: true
  	},

  	apellidoPaterno: {
  		type:'string',
  		required:true
  	},

  	apellidoMaterno: 'string',

  	correo: {
  		type:'email',
  		required:true
  	},

  	contrasena: {
  		type:'string',
  		required: true
  	},

    log: {
      collection: 'log',
      via: 'idUsuario'
    }

  }
};

