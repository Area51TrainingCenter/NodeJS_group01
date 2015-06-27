module.exports = function(req, res, next) {

	if(req.session.authenticated.rol=="ADMIN") {
		next();
	};

	res.forbidden("No puede acceder");

}