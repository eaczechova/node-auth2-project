const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js');
const Users = require('./users-model.js');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

// router.get('/', restricted, (req, res) => {
// 	Users.find()
// 		.then((users) => {
// 			res.status(200).json(users);
// 		})
// 		.catch((err) => res.send(err));
// });

// Return users of the same department

router.get('/', restricted, (req, res) => {
	const tokenHeader = req.headers.authorization;
	const parts = tokenHeader.split(' ');
	const token = parts[1];
	const loggedInUser = jwt.verify(token, secrets.jwtSecret, (decodedToken) => {
		return res.decodedJwt.userDepartment;
	});

	Users.find()
		.then((users) => {
			const sameDepartment = users.filter(
				(user) => user.department == loggedInUser
			);
			res.status(200).json(sameDepartment);
		})
		.catch((err) => res.send(err));
});

module.exports = router;
