const routes = require("express").Router();
const controllers = require('../controllers/');

routes.get('/', controllers.displayData);

module.exports = routes;