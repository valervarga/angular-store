/**
 * @file Defines all user related business logic.
 * @author Valer Varga
 */

const Users = require('../models/User');

const UserService = {
  // READE
  getOne(id) {
		return new Promise((resolve, reject) => {
      Users.findOne({ _id: id })
        .then(data => resolve(data))
        .catch(error => reject(`Product cannot be found. Error: ${error}`))
    });
  }
}

module.exports = UserService;
