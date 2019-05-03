/**
 * @file Dispatcher for user related requests.
 * @author Valer Varga
 */

const UserService = require('../services/UserServices');

const UserController = {
	// CREATE
	createOne(req, res) {
		UserService.createOne({
			username: req.body.username ? req.body.username.trim() : '',
			email: req.body.email ? req.body.email.trim() : '',
			password: req.body.password ? req.body.password.trim() : '',
			confirm: req.body.confirm ? req.body.confirm.trim() : ''
		})
			.then(user => res.json({
				success: true,
				data: user
			}))
			.catch(error => res.json({
				success: false,
				message: error
			}))
	},

	// READ
	getOne(req, res) {
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
