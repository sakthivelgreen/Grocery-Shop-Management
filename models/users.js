const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        maxLength: 10,
        minLength: 10
    },
    role: {
        type: String,
        default: "Standard"
    }
}, { timestamps: true });

const User = new mongoose.model('User', userSchema);

module.exports = User;