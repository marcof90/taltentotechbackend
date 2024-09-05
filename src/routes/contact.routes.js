const miRouter = require("express").Router();
const contactsFormController = require("../controllers/contactsForms.controller");

miRouter.post("/guardar", contactsFormController.guardarContacto);
miRouter.post("/listar", contactsFormController.listarContactos);
miRouter.get("/listar", contactsFormController.listarContactos);

module.exports = miRouter;
