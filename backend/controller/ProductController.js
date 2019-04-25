/**
 * @file Dispatcher for product related requests.
 * @author Valer Varga
 */

const ProductService = require('../services/ProductServices');

const ProductController = {
  getAll(req, res) {
    ProductService.getAll()
      .then(products => res.json({
        success: true,
        data: products
      }))
      .catch(error => res.json({
        success: false,
        message: error
      }));
  }
};

module.exports = ProductController;