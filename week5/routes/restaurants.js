var express = require("express");

var RestaurantsController = require("../controllers/restaurants_controller.js");



var router = express.Router();

console.log(RestaurantsController);
router.get('/', RestaurantsController.index);

module.exports = router;