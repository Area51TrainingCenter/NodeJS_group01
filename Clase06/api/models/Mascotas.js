/**
* Mascotas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: "connMySQL",
  tableName: "mascotas",
  attributes: {
  	idMascota: {
  		type:"integer",
  		primaryKey: true,
  		autoIncrement: true
  	},

  	nombreMascota: "string",

  	duenos: {
  		collection:"duenos",
  		via: "mascota"
  	}


  }
};

