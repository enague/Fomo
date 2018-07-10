const router = require("express").Router();

const authCheck = (req, res, next) => {
	//check if user is logged in
	if (!req.user) {
		//if user is not logged in
		res.redirect("/auth/login");
	} else {
		//if user is logged in
		next();
	}
};

router.get("/", authCheck, (req, res) => {
	res.render("profile", { user: req.user });
});

module.exports = router;
