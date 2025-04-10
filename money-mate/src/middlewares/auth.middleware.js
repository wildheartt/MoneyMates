const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.userId = decoded.id;
        next();
    });
};

const checkRole = (roles) => {
    return (req, res, next) => {
        User.findById(req.userId, (err, user) => {
            if (err || !user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!roles.includes(user.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            next();
        });
    };
};

module.exports = {
    authMiddleware,
    checkRole,
};