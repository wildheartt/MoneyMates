const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//  переменные окружения
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//  роуты
const authRoutes = require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const transactionsRoutes = require('./routes/transactions.routes');

app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/transactions', transactionsRoutes);

//  проверка
app.get('/', (req, res) => {
  res.send('MoneyMate API is running');
});

module.exports = { app };
