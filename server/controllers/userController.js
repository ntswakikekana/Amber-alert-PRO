import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { generateToken, verifyToken } from "../middleware/authMiddleware.js";

// Loads env variables
import dotenv from "dotenv";
dotenv.config();

// POST /users - Create a new user
export async function createUser(req, res) {
  try {
    console.log(req.body);
    const newUser = new User(req.body); // Assuming req.body has the user data

    const token = generateToken(newUser._id);
    res.cookie("token", token, { httpOnly: true });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", newUser, token });
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
export async function loginUser(req, res) {
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
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
}

// GET /users/:id - Gets a user
export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving user", error: error.message });
  }
}

// DELETE /:id - Delete user by ID
export async function deleteUser(req, res) {
  try {
    const { password } = req.body;

    // Find the user by ID
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is provided
    if (!password) {
      return res
        .status(400)
        .json({ message: "Password is required to delete the account" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If password is correct, delete the user
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
}
