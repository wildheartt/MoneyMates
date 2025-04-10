const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Route to create a new transaction
router.post('/', authMiddleware.verifyToken, transactionsController.createTransaction);

// Route to retrieve all transactions
router.get('/', authMiddleware.verifyToken, transactionsController.getAllTransactions);

// Route to retrieve a specific transaction by ID
router.get('/:id', authMiddleware.verifyToken, transactionsController.getTransactionById);

// Route to update a transaction by ID
router.put('/:id', authMiddleware.verifyToken, transactionsController.updateTransaction);

// Route to delete a transaction by ID
router.delete('/:id', authMiddleware.verifyToken, transactionsController.deleteTransaction);

module.exports = router;