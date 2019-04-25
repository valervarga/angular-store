/**
 * @file Defines all product related business logic.
 * @author Valer Varga
 */

const Products = require('../models/Product');

const ProductService = {
  getAll() {
    return new Promise((resolve, reject) => {
      Products.find({})
        .then(data => resolve(data))
        .catch(error => reject('No products found. ', error))
    });
  }
}

module.exports = ProductService;