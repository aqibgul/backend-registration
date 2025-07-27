const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    res.status(200).json({ message: "Login successfully", email, password });
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = loginController;
