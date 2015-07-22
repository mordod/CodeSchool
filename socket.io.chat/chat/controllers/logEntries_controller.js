var LogEntry = require("../models/logEntries.js");

var LogEntriesController = {
	index: function(req, res) {
		LogEntry.find({}, function(err, logEntries) {
			res.json(logEntries);
		});
	},

	create: function(req, res){
		var logEntry = new LogEntry({
			name: req.body.name,
			text: req.body.text,
			time: Date.now(),
			position: req.body.position
		});
		if (!Date.now) {
    		Date.now = function() { return new Date().getTime(); }
		}

		logEntry.save(function (err, savedLogEntry) {
			res.status(201).json(savedLogEntry);
		});
	}
};

module.exports = LogEntriesController;