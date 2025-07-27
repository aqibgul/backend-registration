const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//   console.log("auth is running");
//   res.send("Welcome to auth page");
// });

// both are same but in router.rout we can use chaining easily
router.route("/").get(authController);

module.exports = router;
