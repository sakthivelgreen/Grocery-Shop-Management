const jwt = require('jsonwebtoken');
require('dotenv').config({});
const Users = require('../models/users');
const SECRET_KEY = process.env.SECRET_KEY;

exports.generateUserToken = async (id) => {
    const user = await Users.findById(id);
    const payload = {
        user: user.fullName,
        email: user.email,
        role: user.role,
        _id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY);
    return token;
}
exports.validateUserToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
}

