export const loginHandler = (req, res) => {
	//validate username and password
	const { username, password } = req.body;

	//check user against database

	//authenticate user

	res.status(200);
	res.end(`${username} and ${password}`);
};
