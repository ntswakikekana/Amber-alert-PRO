import express from 'express';
import { createReport, getReports, getReport, updateReport, deleteReport } from '../controllers/reportController.js';
const router = express.Router();

// Create a new report
router.post('/', createReport);

// Get all reports
router.get('/', getReports);

// Get report by ID
router.get('/:id', getReport);

// Update report by ID
router.put('/:id', updateReport);

// Delete report by ID
router.delete('/:id', deleteReport);

export default router;
