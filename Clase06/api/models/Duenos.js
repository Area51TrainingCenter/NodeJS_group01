/**
* Duenos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: "connMySQL",
  table: "duenos",
  attributes: {
  	idDueno: {
  		type:"integer",
  		primaryKey: true,
  		autoIncrement: true
  	},

  	nombre: "string",
  	mascota: {
  		model:"mascotas"
  	}
  }
};

