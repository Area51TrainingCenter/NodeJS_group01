/**
* Centroscostos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idcentrocosto: {
  		type:"integer",
  		primaryKey: true,
  		unique: true,
  		autoIncrement: true
  	},

  	ccentrocosto: {
  		type: "string",
  		required:true
  	}

  }
};

