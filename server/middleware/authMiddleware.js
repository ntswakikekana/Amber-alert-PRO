import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


// Helper function to generate a JWT
export const generateToken = (id, username) => {
    return jwt.sign({ id, username }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
  };


// Middleware to verify JWT
export function requireAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Attach the user info (id) to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token is invalid or expired' });
  }
}

// Middleware to verify admin
export function requireAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(403).json({ message: 'Not authorized as an admin' });
  }
}

export function checkUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    req.user = null;
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
    } catch (error) {
      console.log(error.message);
    }
  }
  next();
}
