const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/login-controller");

// Route for user login
router.route("/").post(loginController);

// Export the router
module.exports = router;
