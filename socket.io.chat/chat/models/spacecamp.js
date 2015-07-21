var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	text: String,
	time: Date

});

var Spacecamp = mongoose.model("spacecamp", schema);


module.exports = Spacecamp;