const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js');
const Users = require('./users-model.js');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
	const { id } = req.params;
	console.log(id);
	Users.find()
		.then((users) => {
			const byDepartment = users.filter((user) => user.department == id);
			res.status(200).json(byDepartment);
		})
		.catch((err) => res.send(err));
});

module.exports = router;
