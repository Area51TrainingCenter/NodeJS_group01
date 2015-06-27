/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	resumen: function(req, res){
		var itemsMenu = menu.itemsMenu(req);
		res.view("resumen",{itemsMenu: itemsMenu, layout:sails.config.recursos.layoutComun});
	}
	
};

