const router = require('express').Router();
const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
	const user = req.body;
	const hash = bcrypt.hashSync(user.password, 8);
	user.password = hash;

	try {
		const saved = await Users.add(user);
		console.log(saved);
		res.status(201).json(saved);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;
