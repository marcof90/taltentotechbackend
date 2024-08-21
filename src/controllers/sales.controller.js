const Sale = require("../models/sale.model").default;
const Product = require("../models/product.model");

const salesController = {
  list: async function (req, res) {
    try {
      const sales = await Sale.find();
      res.status(200).json({ sales: sales });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  /**
   * Esta funcion me ayuda a crear una venta de un producto
   * en el body del request se recibe un valor (quantity)
   * que representa la cantidad del producto vendido
   */
  create: async function (req, res) {
    try {
      const sale = new Sale(req.body);
      const product = await Product.findById(req.body.product);
      sale.total = sale.quantity * product.price;
      await sale.save();
      // res.status(200).json(req.body.product);
      res.status(200).json({ sale: sale });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = salesController;
