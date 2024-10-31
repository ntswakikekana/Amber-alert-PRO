import express from 'express';
import { signup, login, logout } from '../controllers/authController.js';

const router = express.Router();

//Signs up a User
router.post('/signup', signup);

//Logins in a User
router.post('/login', login);

//Logs out a User
router.get('/logout', logout);

export default router;
