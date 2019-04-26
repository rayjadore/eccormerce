const mongoose = require('mongoose'),
schema = mongoose.Schema;

const userSchema = new schema({
    address: { type: String },
    city: String,
    country: String,
    createdAt: { type: Date, default: Date.now },
    email: String,
    email_verified: { type: Boolean, default: false },
    firstname: String,
    phone: String,
    password: String,
    lastname: String,
    state: String,
    userIp: String,
    zip: String
});

module.exports = mongoose.model('user', userSchema);