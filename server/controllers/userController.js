import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { generateToken, requireAuth } from "../middleware/authMiddleware.js";

// Loads env variables
import dotenv from "dotenv";
dotenv.config();

// GET / - Get all users
export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving users", error: error.message });
  }
}

// GET / - Get user by username
export async function getUser(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.user.username !== req.params.username && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving user", error: error.message });
  }
}

// DELETE /:id - Delete user by username
export async function deleteUser(req, res) {
  console.log("Deleting user", req.params);
  try {
    const { password } = req.body;

    // Find the user by ID
    const user = await User.findOne({ username: req.params.username }, 'username password');
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

    // Check if the user is deleting their own account
    if (req.user.username !== req.params.username && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // If password is correct, delete the user
    await User.findByIdAndDelete(user._id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
}

// PUT /:id - Update user by username
export async function updateUser(req, res) {
  try {
    // Check if the user exist
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is updating their own account
    if (req.user.username !== req.params.username && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update the user
    try {
      await User.findByIdAndUpdate( req.user.id, req.body, { new: true, runValidators: true })
    } catch (error) {
      return res.status(400).json({ message: "Error updating user", error: error.message });
    }

    res.json({ message: "User updated successfully"});
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: "User validation failed",
        error: errors[0],
      });
    }

    return res.status(500).json({
      message: "An unexpected error occurred while updating the user",
      error: error.message,
    });
  }
}
