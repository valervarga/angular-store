/**
 * @file Dispatcher for user related requests.
 * @author Valer Varga
 */

const UserService = require('../services/UserServices');

const UserController = {
  // READ
  getOne(req, res) {
		console.log('req.params', req.params);
		
    UserService.getOne(req.params.id)
      .then(user => res.json({
        success: true,
        data: user
      }))
      .catch(error => res.json({
        success: false,
        message: error
      }));
  }
};

module.exports = UserController;
