const router = require("express").Router();
const passport = require("passport");
const passportSetup = require("./passport.setup.js");

//auth logout
router.get("/logout", (req, res) => {
	//handle with passport
	res.send("logging out");
});

//auth with google
router.get(
	"/google",
	passport.authenticate("google", {
		//what we want to retrieve
		scope: ["profile"]
	})
);

//callback route fro google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
	// res.send(req.user);
	res.redirect("/profile/");
});

module.exports = router;
