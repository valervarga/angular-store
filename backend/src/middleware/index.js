const jwt = require('jsonwebtoken');
const config = require('../build.config');

const middleware = {
	checkToken(req, res, next) {
		let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
		if (!token) return res.status(401).json({ success: false, message: 'Unauthorized request' });
		
		if (token && token.startsWith('Bearer ')) token = token.split(' ')[1]; // Remove Bearer from string
		if (token === 'null') return res.status(401).json({ success: false, message: 'Unauthorized request' });

		jwt.verify(token, config.SECRET_KEY, (error, decode) => {
			if (error) return res.status(401).json({ success: false, message: 'Unauthorized request' });

			res.decode = decode;
			next();
		});
	}
}

module.exports = middleware;
