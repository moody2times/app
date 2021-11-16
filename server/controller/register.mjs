export const registerHandler = (req, res) => {
	const { username, password } = req.body;

	//validate username and password

	//hash password

	//store user in database

	res.status(200);
	res.end("<h1>Registration successful</h1>");
};
