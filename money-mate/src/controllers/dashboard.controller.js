const express = require('express');
const router = express.Router();

const userStatistics = {
    totalTransactions: 100,
    totalSpent: 5000,
    totalIncome: 7000,
};

const getDashboardStats = (req, res) => {
    res.status(200).json(userStatistics);
};

module.exports = {
    getDashboardStats,
};