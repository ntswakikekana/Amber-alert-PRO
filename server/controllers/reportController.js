import Report from '../models/reportModel.js';
import User from '../models/userModel.js';

// Create a new report
export async function createReport(req, res) {
  try {

    if (!req.user) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    req.body.createdBy = req.user.id;
    console.log('req.body', req.body);
    const newReport = new Report(req.body);
    await newReport.save();

    res.status(201).json({ message: 'Report created successfully',  report_id: newReport._id  });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        message: 'Report validation failed',
        error: errors[0],
      });
    }

    return res.status(500).json({
      message: 'An unexpected error occurred while creating the report',
      error: error.message,
    });
  }
}

// Get all reports
export async function getReports(req, res) {
  try {
    const reports = await Report.find().populate('createdBy', 'username');
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving reports', error: error.message });
  }
}

// Get report by ID
export async function getReport(req, res) {
  try {
    const report = await Report.findById(req.params.id).populate('createdBy', 'username');
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving report', error: error.message });
  }
}

// Update report by ID
export async function updateReport(req, res) {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    console.log('req.user', req.user);
    console.log('report.createdBy', report.createdBy.toString());
    if (req.user.id !== report.createdBy.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
      await Report.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    } catch (error) {
      return res.status(400).json({ message: 'Error updating report', error: error.message });
    }
    res.json({ message: 'Report updated successfully', report });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        message: 'Report validation failed',
        error: errors[0],
      });
    }

    return res.status(500).json({
      message: 'An unexpected error occurred while updating the report',
      error: error.message,
    });
  }
}

// Delete report by ID
export async function deleteReport(req, res) {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    if (req.user.id !== report.createdBy.toString() || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await report.remove();
    res.json({ message: 'Report deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting report', error: error.message });
  }
}
