const adminController = async (req, res) => {
  res.send("Welcome to admin page");
  try {
  } catch (error) {
    console.error("Error during admin operation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = adminController;
