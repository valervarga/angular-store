/**
 * @file Dispatcher for user related requests.
 * @author Valer Varga
 */

const UserService = require('../services/UserServices');

const UserController = {
	// CREATE
	createOne(req, res) {
		const userData = {
			username: req.body.username ? req.body.username.trim() : '',
			email: req.body.email ? req.body.email.trim() : '',
			password: req.body.password ? req.body.password.trim() : '',
			confirm: req.body.confirm ? req.body.confirm.trim() : ''
		}

		UserService.createOne(userData)
			.then(message => res.json({
				success: true,
				message
			}))
			.catch(error => res.json({
				success: false,
				message: error
			}))
	},

	// READ
	login(req, res) {
		const userData = {
			username: req.body.username,
			password: req.body.password
		};

		console.log('user controller userdata', userData);

		UserService.login(userData)
			.then(token => res.json({
				success: true,
				token
			}))
			.catch(error => res.json({
				success: false,
				message: error
			}));
	}
};

module.exports = UserController;
