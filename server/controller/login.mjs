export const loginHandler = (req, res) => {
	const { username, password } = req.body;
	//validate username and password

	//check user against database

	//authenticate user

	res.status(200);
	res.end();
};
