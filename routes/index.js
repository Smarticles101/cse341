const routes = require("express").Router();
const controllers = require("../controllers/");

routes.use("/contacts", require("./contacts"));
routes.use("/", require("./swagger"));

routes.get("/", controllers.displayData);

module.exports = routes;
