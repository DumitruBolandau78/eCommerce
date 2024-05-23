const {body} = require('express-validator');
const User = require('../models/user');

module.exports = [
    body('email', 'Please use a valid email address.').isEmail().normalizeEmail(),
    body('password', 'Password should be at least 6 characters.').isLength({min: 6, max: 20}).isAlphanumeric()
]