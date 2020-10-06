const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signIn = () => {};
exports.signup = async (req, res, next) => {
	try {
		//create a user
		let user = await db.User.create(req.body);
		let { id, username, profileImageUrl } = user;
		let token = jwt.sign(
			{
				id,
				username,
				profileImageUrl
			},
			process.env.SECRET_KEY
		);
		return res.status(200).json({
			id,
			username,
			profileImageUrl,
			token
		});

		//create a token
	} catch (err) {
		if (err.code === 11000) {
			err.message = 'Sorry! that username and/or email is already taken';
		}
		return next({
			status: 400
		});
		//see what kind of error
		//if it is a certain error
		//respond with username/email already taken
		//otherwise just send back a generic 400 status
	}
};
