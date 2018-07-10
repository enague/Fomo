const axios = require("axios");
const config = require("../config.js");
const mongoose = require("mongoose");

mongoose.connect(
	config.mongodb,
	{ useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error:"));
db.once("open", () => console.log("db connected successfully"));

const userSchema = mongoose.Schema({
	id: String,
	username: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
