const mongoose = require('mongoose'),
schema = mongoose.Schema;

const productSchema = new schema({
name: String,
price: Number,
productImage: String,
productLive: { type: Boolean, default: false },
productLocation: { type: String },
quantity: Number,
category: String,
});