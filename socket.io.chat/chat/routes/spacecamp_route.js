var express = require("express");

var SpacecampController = require("../controllers/spacecamp_controller.js");



var router = express.Router();


router.get('/spacecamp(.:format)?', SpacecampController.index);
router.post("/spacecamp(.:format)?", SpacecampController.create);
router.get("/spacecamp/(:id)(.:format)?", SpacecampController.show);
router.delete("/spacecamp/(:id)(.:format)?", SpacecampController.destroy);


module.exports = router;