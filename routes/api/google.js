const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
// /api/google/:title

router
.route("/")
.get(googleController.findAll)

// router
//   .route("/:title")
//     .get(googleController.search)
 
module.exports = router;