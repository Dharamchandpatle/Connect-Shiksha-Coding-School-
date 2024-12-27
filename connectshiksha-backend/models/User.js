const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const isValidPhone = (value) => {
    return /^\d{10}$/.test(value);
};

const isValidEmail = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}

const isValidPassword = (value) => {
    // Password must be 8 characters Long and contain one number
    return /^(?=.*\d).{8,}$/.test(value);
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: isValidPhone,
            message: "Phone number must be 10 digits long."
        }

    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: isValidEmail,
            message: "Please enter a valid email."
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: isValidPassword,
            message: "Password must be 8 characters long and contain one number."
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;