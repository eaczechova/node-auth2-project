module.exports = {
	checkInput,
};

function checkInput(user) {
	return Boolean(user.username && user.password);
}
