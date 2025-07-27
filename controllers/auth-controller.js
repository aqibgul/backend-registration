//auth logic

const authController = async (req, res) => {
  const data = req.body;
  try {
    res.json({
      data,
    });
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = authController;
