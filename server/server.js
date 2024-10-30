// backend/server.js
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import connectDB from './config/db.js'; // Import the connectDB function
import userRoutes from './routes/userRoutes.js'; // Import the user routes
import reportRoutes from './routes/reportRoutes.js'; // Import the report routes
import authRoutes from './routes/authRoutes.js'; // Import the auth routes
import { checkUser } from './middleware/authMiddleware.js'; // Import the checkUser middleware


dotenv.config();
const app = express();


// Connect to MongoDB
await connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies


// Router to all routes
app.use('*', checkUser); // Check if user is logged in
app.use('/user', userRoutes); // Use Router on userRoutes
app.use('/report', reportRoutes); // Use Router on reportRoutes
app.use('/auth', authRoutes); // Use Router on authRoutes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
