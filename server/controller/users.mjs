export const users = (req, res) => {
	const { username } = req.params;

	res.status(200);
	res.end(`Current user is ${username}`);
};
