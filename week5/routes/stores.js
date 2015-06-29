var express = require("express");

var StoreController = require("../controllers/store_controller.js");



var router = express.Router();


router.get('/', StoreController.index);

module.exports = router;