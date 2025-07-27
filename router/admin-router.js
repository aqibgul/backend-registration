const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
// router.route("/").get((req, res) => {
//   res.send("Welcome to admin page....");
//   try {
//   } catch (error) {
//     console.error("Error during admin operation:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
router.route("/").get(adminController);

module.exports = router;
