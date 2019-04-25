const mongoose = require('mongoose'),
schema = mongoose.Schema;

const userSchema = new schema({
    address: { type: String },
    city: String,
    country: String,
    createdAt: { type: Date, default: Date.now },
    email: String,
    emailVerified: { type: Boolean, default: false },
    firstName: String,
    phone: String,
    password: String,
    lastName: String,
    state: String,
    userIp: String,
    zip: String
});

module.exports = mongoose.model('user', userSchema);