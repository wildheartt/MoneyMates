const express = require('express');
const router = express.Router();

// Mock data for user statistics
const userStatistics = {
    totalTransactions: 100,
    totalSpent: 5000,
    totalIncome: 7000,
};

// Controller function to get dashboard statistics
const getDashboardStats = (req, res) => {
    res.status(200).json(userStatistics);
};

// Exporting the controller functions
module.exports = {
    getDashboardStats,
};