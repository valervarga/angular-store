/**
 * @file Dispatcher for product related requests.
 * @author Valer Varga
 */

const ProductService = require('../services/ProductServices');

const ProductController = {
  // CREATE
  createOne(req, res) {
    ProductService.createOne({
      title: req.body.title,
      description: req.body.description,
      available: req.body.available,
      price: req.body.price
    })
      .then(product => res.json({
        success: true,
        data: product
      }))
      .catch(error => res.json({
        success: false,
        message: error
      }));
  },

  // READ
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
  },

  getOne(req, res) {
    ProductService.getOne(req.params.id)
      .then(product => res.json({
        success: true,
        data: product
      }))
      .catch(error => res.json({
        success: false,
        message: error
      }));
  },


  // UPDATE
  updateOne(req, res) {
    ProductService.updateOne({...req.body}, req.params.id)
      .then(product => res.json({
        success: true,
        data: product
      }))
      .catch(error => res.json({
        success: false,
        message: error
      }));
  },

  // DELETE
  removeOne(req, res) {
    ProductService.removeOne(req.params.id)
      .then(() => res.json({
        success: true
      }))
      .catch(error => res.json({
        success: false,
        message: error
      }));
  }
};

module.exports = ProductController;
