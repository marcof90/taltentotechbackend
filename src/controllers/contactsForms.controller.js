const ContactFormModelo = require("../models/contactsForms.model");

const ContactFormController = {
  guardarContacto: async function (req, res) {
    const ContactFormParaGuardar = new ContactFormModelo(req.body);
    await ContactFormParaGuardar.save();
    res.status(200).json(ContactFormParaGuardar);
  },
  listarContactos: async function (req, res) {
    //en una sola linea, regreso la información de todos los contact forms que hay en la bd
    res.status(200).json(await ContactFormModelo.find());
  },
};

module.exports = ContactFormController;
