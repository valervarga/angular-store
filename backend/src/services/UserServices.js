/**
 * @file Defines all user related business logic.
 * @author Valer Varga
 */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('../build.config');
const User = require('../models/User');

const UserService = {
	// CREATE
	createOne(user) {
		return new Promise((resolve, reject) => {
			if (!user.username) return reject('Username is required');
			if (!user.email) return reject('Email address is required');
			if (!user.password) return reject('Password is required');
			if (user.password !== user.confirm) return reject('Passwords don\'t match');

			// Get user by username and check if user already exist
			User.find({ username: user.username })
				.then(userExist => {
					if (userExist.length > 0) return reject(`User with the following username (${user.username}) already exist`);

					bcrypt.hash(user.password, config.SALT_ROUNDS)
						.then(hash => {
							const refreshToken = jwt.sign({
								data: {
									username: user.username,
									password: user.password
								}
							}, config.SECRET_KEY);
		
							user.refreshToken = refreshToken;
							user.password = hash;
		
							const newUser = new User(user);
		
							newUser.save();
							return resolve('User registered successfully');
						})
						.catch(error => reject(`User creation failed. Error: ${error}`))
				})
				.catch(error => reject(`User creation failed. Error: ${error}`))
		});
	},

	// READE
	login(userData) {
		return new Promise((resolve, reject) => {

			User.findOne({ username: userData.username })
				.then(user => {
					if (!user) return reject('User cannot be found.')

					const passwordMatch = bcrypt.compareSync(userData.password, user.password);
					if (!passwordMatch) return reject('Password is not correct.');

					const token = jwt.sign(
						{token: user.refreshToken},
						config.SECRET_KEY,
						{expiresIn: '30s'}
					);

					user.token = token;

					return resolve(token);
				})
				.catch(error => reject(`Authentication faild. User cannot be found. Error: ${error}`))
		});
	}
}

module.exports = UserService;
