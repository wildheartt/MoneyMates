const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

// Route to get user statistics
router.get('/statistics', dashboardController.getUserStatistics);

// Route to get dashboard data
router.get('/data', dashboardController.getDashboardData);

module.exports = router;