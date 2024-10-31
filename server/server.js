// backend/server.js
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import combineDocs from './middleware/combineDocs.js'; // Import the combineDocs function
import cors from 'cors';

import connectDB from './config/db.js'; // Import the connectDB function
import userRoutes from './routes/userRoutes.js'; // Import the user routes
import reportRoutes from './routes/reportRoutes.js'; // Import the report routes
import authRoutes from './routes/authRoutes.js'; // Import the auth routes
import { checkUser } from './middleware/authMiddleware.js'; // Import the checkUser middleware


dotenv.config(); // Load environment variables
combineDocs(); // Combine the documents

const app = express();
const docApp = express();
const swaggerDocument = yaml.load('./documentation/swagger.yaml');
const PORT = process.env.PORT || 5000;
const DOC_PORT = process.env.DOC_PORT || 4000;


// Connect to MongoDB
await connectDB();

// Enable CORS
app.use(cors({
  origin: `http://localhost:${process.env.DOC_PORT}`,
}));

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies

// Router to all routes
app.use('*', checkUser); // Check if user is logged in
app.use('/user', userRoutes); // Use Router on userRoutes
app.use('/report', reportRoutes); // Use Router on reportRoutes
app.use('/auth', authRoutes); // Use Router on authRoutes

// Serve the API documentation
docApp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Start documentation server
docApp.listen(DOC_PORT, () => {
  console.log(`Documentation server is running on port ${DOC_PORT}`);
});
