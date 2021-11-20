export const userHandler = (req, res) => {
	const { username } = req.params;

	res.status(200);
	res.end(`Current user is ${username}`);
};
