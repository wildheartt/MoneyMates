const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactions.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.verifyToken, transactionsController.createTransaction);

router.get('/', authMiddleware.verifyToken, transactionsController.getAllTransactions);

router.get('/:id', authMiddleware.verifyToken, transactionsController.getTransactionById);

router.put('/:id', authMiddleware.verifyToken, transactionsController.updateTransaction);

router.delete('/:id', authMiddleware.verifyToken, transactionsController.deleteTransaction);

module.exports = router;