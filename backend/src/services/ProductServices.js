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
        .catch(error => reject(`No products found. Error: ${error}`))
    });
  },

  getOne(id) {
    return new Promise((resolve, reject) => {
      Products.findOne({ _id: id })
        .then(data => resolve(data))
        .catch(error => reject(`Product cannot be found. Error: ${error}`))
    });
  },
  
  removeOne(id) {
    return new Promise((resolve, reject) => {
      Products.findByIdAndRemove(id)
        .then(data => resolve(data))
        .catch(error => reject(`Product removal failed. Error: ${error}`))
    })
  }
}

module.exports = ProductService;
