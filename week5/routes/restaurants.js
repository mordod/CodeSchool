var express = require("express");

var RestaurantsController = require("../controllers/restaurants_controller.js");



var router = express.Router();


router.get('/', RestaurantsController.index);
router.get("/new", RestaurantsController.new);
router.post("/", RestaurantsController.create);
router.get("/:id", RestaurantsController.show);
console.log(RestaurantsController);

module.exports = router;