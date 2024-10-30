import express from 'express';
const router = express.Router();
import { requireAuth } from '../middleware/authMiddleware.js';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';


//Gets all Users
router.get('/', requireAuth, getUsers);

//Gets a User
router.get('/:username', requireAuth, getUser);

//Updates a User
router.put('/:username', requireAuth, updateUser);

//Deletes a User
router.delete('/:username', requireAuth, deleteUser);

export default router;
