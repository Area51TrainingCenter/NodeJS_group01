/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  '/monitoreo': {
    controller: "UsuarioController",
    action: "listar"
  },

  "get /usuario/suscribir": {
    controller: "UsuarioController",
    action: "suscribir"
  },

  "post /usuario/insertar": {
    controller: "UsuarioController",
    action: "insertar"
  },

  "put /usuario/actualizar/:idUsuario": {
    controller: "UsuarioController",
    action: "actualizar"
  },

  "delete /usuario/eliminar/:idUsuario": {
    controller: "UsuarioController",
    action: "eliminar"
  },

  "get /usuario/conectado": {
    controller: "UsuarioController",
    action: "conectado"
  },

  "post /usuario/mensajeAMi": {
    controller: "UsuarioController",
    action: "mensajeAMi"
  },

  "post /usuario/unirASala/": {
    controller: "UsuarioController",
    action: "unirASala"
  },

  "post /usuario/mensajeASalaEspecifica": {
    controller: "UsuarioController",
    action: "mensajeASalaEspecifica"
  },

  "get /usuario/abandonarSala/:nombreSala": {
    controller: "UsuarioController",
    action: "abandonarSala"
  },

  "get /usuario/salasUnidas": {
    controller: "UsuarioController",
    action: "salasUnidas"
  },

  "get /usuario/cantidadSala/:nombreSala": {
    controller: "UsuarioController",
    action: "cantidadSala"
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
