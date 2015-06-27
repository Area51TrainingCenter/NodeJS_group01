/**
* Roles.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: "roles",
  attributes: {

  	idrol:{
  		type: "integer",
  		primaryKey: true,
  		unique: true,
  		autoIncrement: true
  	},

  	crol: {
  		type: "string",
  		required: true
  	}

  }
};

