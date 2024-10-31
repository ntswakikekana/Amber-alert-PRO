import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  const options = { serverSelectionTimeoutMS: 5000 };

  mongoose.connect(process.env.MONGODB_URI, options)
    .catch((err) => {
      console.error(` Error connecting to MongoDB:
        Please check your MongoDB URI in the .env file and ensure that the MongoDB server is running.
      `);
      process.exit(1);
    });

  // Connection event handlers
  mongoose.connection.on('connected', () => {
    console.log('Connection to MongoDB established successfully');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected, trying to reconnect...');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('Mongoose reconnected successfully');
  });

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
  });
}

export default connectDB;

