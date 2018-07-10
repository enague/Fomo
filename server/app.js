const express = require("express");
const authRoutes = require("./routes.js");
const profileRoutes = require("./profileRoutes.js");
const passport = require("passport");
const db = require("../database/index.js");
const cookieSession = require("cookie-session");
const config = require("../config.js");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(
	cookieSession({
		cookie: { maxAge: 24 * 60 * 60 * 1000 },
		keys: [config.cookieKey]
	})
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.use("/", express.static(path.join(__dirname, "/../public")));
app.use(bodyParser.json());

app.get("/quote", (req, res) => {
	axios
		.get(
			"http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
		)
		.then(results => res.send(results.data))
		.catch(error => console.log(error));
});

app.post("/add/event", (req, res) => {
	const event = req.body.params.value;
	//function to look up username and add events
});

module.exports = app;
