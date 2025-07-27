const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// registration logic
const registrationController = async (req, res) => {
  try {
    const { username, email, password, cnic, phone, course } = req.body; // Destructure the request body
    // Validate input data
    if (!username || !email || !password || !cnic || !phone || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user already exists
    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(400).json({ message: "email already exists" });
    }
    // const saltRounds = await bcrypt.genSalt(); // Number of salt rounds for hashing
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt factor of 10

    const userCreated = await User.create({
      username: username,
      email: email,
      password: hashedPassword, // Store the hashed password
      cnic: cnic,
      phone: phone,
      course: course,
      isAdmin: false, // Default value for isAdmin
      registrationDate: new Date(), // Set the registration date to now
    });

    res.status(201).json({
      msg: "successsfull registered", // Success message
      token: await userCreated.generateToken(), // Generate a token for the user
      userId: userCreated._id.toString(),
    }); // Respond with the created user data and a token
    // res.status(200).json({
    //   message: "Registration successful", // Success message
    // });
  } catch (error) {
    console.error("Error during registration:", error);
    // res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registrationController };
