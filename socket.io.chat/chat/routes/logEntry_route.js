var express = require("express");

var LogEntriesController = require("../controllers/logEntries_controller.js");

var router = express.Router();

router.get('/log_entries(.:format)?', LogEntriesController.index);
router.post("/log_entries(.:format)?", LogEntriesController.create);

module.exports = router;