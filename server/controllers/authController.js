import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { generateToken, requireAuth } from "../middleware/authMiddleware.js";


// POST /signup - Create a new user
export async function signup(req, res) {
  try {
    const newUser = new User(req.body); // Assuming req.body has the user data

    const token = generateToken(newUser._id, newUser.username);
    res.cookie("token", token, { httpOnly: true });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Extract validation errors and send a more user-friendly response
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: "User validation failed",
        error: errors[0],
      });
    } else if (error.code === 11000) {
      // 11000 is the code for duplicate key error
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];

      const errMsg = `The ${field} <${value}> is already in use. Please choose another ${field}.`;
      return res.status(400).json({
        message: "Error creating user",
        error: errMsg,
      });
    }
    return res.status(500).json({
      message: "An unexpected error occurred while creating the user",
      error: error.message,
    });
  }
}

// POST /login - Authenticate a user and return a JWT
export async function login(req, res) {
  const { phone, password } = req.body;

  try {
    // Find the user by phone number
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the entered password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT if password matches
    const token = generateToken(user._id, user.username, user.role);

    // Set the JWT as a cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({
      message: "Login successful"
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
}


// POST /logout - Clear the JWT cookie
export async function logout(req, res) {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
}
