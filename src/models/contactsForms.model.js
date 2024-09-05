const mongoose = require("mongoose");
const contactSchema = mongoose.Schema;

const ContactForm = new contactSchema({
  nombre: String,
  email: String,
  telefono: Number,
  mensaje: String,
});

module.exports = mongoose.model("contactsforms", ContactForm);
