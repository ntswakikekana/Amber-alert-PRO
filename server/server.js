// backend/server.js
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import connectDB from './config/db.js'; // Import the connectDB function
import userRoutes from './routes/userRoutes.js'; // Import the user routes
import reportRoutes from './routes/reportRoutes.js'; // Import the report routes


dotenv.config();
const app = express();


// Connect to MongoDB
await connectDB();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies


// Router to all routes
app.use('/user', userRoutes); // Use Router on userRoutes
app.use('/report', reportRoutes); // Use Router on reportRoutes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
