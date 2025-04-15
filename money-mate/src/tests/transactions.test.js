import request from 'supertest';
import app from '../app'; 
import { Transaction } from '../models/transaction.model'; 

describe('Transaction API', () => {
  beforeEach(async () => {
    await Transaction.deleteMany({}); 
  });

  it('should create a new transaction', async () => {
    const transactionData = {
      amount: 100,
      date: new Date(),
      description: 'Test transaction',
    };

    const response = await request(app)
      .post('/api/transactions') 
      .send(transactionData)
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    expect(response.body.amount).toBe(transactionData.amount);
    expect(response.body.description).toBe(transactionData.description);
  });

  it('should retrieve all transactions', async () => {
    const transactionData = [
      { amount: 100, date: new Date(), description: 'Transaction 1' },
      { amount: 200, date: new Date(), description: 'Transaction 2' },
    ];

    await Transaction.insertMany(transactionData);

    const response = await request(app)
      .get('/api/transactions') 
      .expect(200);

    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('description', 'Transaction 1');
    expect(response.body[1]).toHaveProperty('description', 'Transaction 2');
  });

  it('should return a transaction by ID', async () => {
    const transaction = await Transaction.create({
      amount: 150,
      date: new Date(),
      description: 'Transaction to retrieve',
    });

    const response = await request(app)
      .get(`/api/transactions/${transaction._id}`)
      .expect(200);

    expect(response.body).toHaveProperty('_id', transaction._id.toString());
    expect(response.body.description).toBe(transaction.description);
  });

  it('should return 404 for non-existing transaction', async () => {
    const nonExistingId = '60d5ec49f1b2c8b1f8e4e1e1'; 

    const response = await request(app)
      .get(`/api/transactions/${nonExistingId}`)
      .expect(404);

    expect(response.body.message).toBe('Transaction not found');
  });
});