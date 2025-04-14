//will fix it after main course

# Money Mate

Money Mate is a personal finance management application that helps users track their income, expenses, and transactions. This project is built using Node.js and Express, providing a robust backend for handling user authentication, transaction management, and dashboard statistics.

## Features

- User authentication (registration, login, token verification)
- Dashboard for viewing user statistics
- Transaction management (create, retrieve, and manage transactions)
- Currency conversion and formatting

## Project Structure

```
money-mate
├── src
│   ├── controllers          # Contains controller files for handling requests
│   ├── middlewares          # Contains middleware for authentication
│   ├── models               # Contains data models for users and transactions
│   ├── routes               # Contains route definitions for the application
│   ├── services             # Contains service files for business logic
│   ├── tests                # Contains unit and integration tests
│   ├── utils                # Contains utility functions and helpers
│   ├── app.js               # Exports the Express application instance
│   └── index.js             # Entry point of the application
├── .env                     # Local environment variables
├── .env.example             # Example of environment variables
├── .eslintrc                # ESLint configuration
├── .prettierrc              # Prettier configuration
├── jest.config.js           # Jest configuration for testing
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/money-mate.git
   ```

2. Navigate to the project directory:

   ```
   cd money-mate
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` file and configure your environment variables.

## Usage

To start the application, run:

```
npm start
```

The server will start on the specified port (default is 3000). You can access the API endpoints as defined in the routes.

## Testing

To run the tests, use:

```
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
