const KEY = process.env.KEY;

export const homeHandler = (req, res) => {
	//home route handler
	res.cookie("userId", KEY, { maxAge: 60 * 60 * 24, httpOnly: true });
	res.end(`Welcome home ${KEY}`);
};
