import request from 'supertest';
import app from '../app'; // Assuming app.js exports the Express app

describe('Authentication Tests', () => {
    describe('POST /auth/login', () => {
        it('should return 200 and a token for valid credentials', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    username: 'testuser',
                    password: 'testpassword'
                });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });

        it('should return 401 for invalid credentials', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    username: 'wronguser',
                    password: 'wrongpassword'
                });
            expect(response.status).toBe(401);
        });
    });

    describe('POST /auth/register', () => {
        it('should return 201 for successful registration', async () => {
            const response = await request(app)
                .post('/auth/register')
                .send({
                    username: 'newuser',
                    password: 'newpassword',
                    email: 'newuser@example.com'
                });
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message', 'User registered successfully');
        });

        it('should return 400 for missing fields', async () => {
            const response = await request(app)
                .post('/auth/register')
                .send({
                    username: 'newuser'
                });
            expect(response.status).toBe(400);
        });
    });
});