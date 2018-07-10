const passport = require("passport");
const config = require("../config.js");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../database/index.js");

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			//options for the google strategy
			callbackURL: "/auth/google/redirect",
			clientID: config.clientID,
			clientSecret: config.clientSecret
		},
		(acessToken, refreshToken, profile, done) => {
			//check if user already exists in db
			User.findOne({ id: profile.id }).then(currentUser => {
				if (currentUser) {
					//already have the user
					console.log("user is:", currentUser);
					done(null, currentUser);
				} else {
					new User({
						id: profile.id,
						username: profile.displayName
					})
						.save()
						.then(newUser => {
							console.log("new user created:" + newUser);
							done(null, newUser);
						});
				}
			});
		}
	)
);
