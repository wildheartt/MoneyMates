const User = require('../models/user.model');

// Register a new user
exports.register = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login a user
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate token logic here (e.g., JWT)
        res.status(200).json({ message: 'Login successful', token: 'generated_token' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};