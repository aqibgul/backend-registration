const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Import necessary modules

//

const secretKey = process.env.SECRET_KEY;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
      secretKey, // Use the secret key from environment variables
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};
// Create the User model
const User = mongoose.model("User", userSchema);
// Export the User model
module.exports = User;
