var Store = require("../models/store.js");

var StoresController = {
	index: function(req, res) {
		var stores = Store.getAll();
		res.render("stores/index", {
			stores: stores
		});
	}
};

module.exports = StoresController;