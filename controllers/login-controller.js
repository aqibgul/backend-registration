const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate input data
    const userExist = await User.findOne({ email });
    console.log("userExist", userExist);
    if (!userExist) {
      return res.status(404).json({ message: "invalid credentials" });
    }
    const isValidPassword = await bcrypt.compare(password, userExist.password);

    res.status(200).json({
      msg: "login successful",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { loginController };
