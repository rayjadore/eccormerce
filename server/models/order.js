const mongoose = require('mongoose'),
schema = mongoose.Schema;

const orderSchema = new schema({
    amount: Number,
    approvalStatus: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: schema.Types.ObjectId, ref: 'user' },
    customerName: String,
    deliveredAt: { type: Date, default: Date.now },
    items: [{name:String}, { quantity: Number }, 
        {price: Number }, {discount: Number }, { name: String }, 
        {ispromo:{ type: String, default: false }}, {status:{ type: String, default: 'open'}} ],
    paymentStatus: { type: String, default: 'unpaid' },
    userId: { type: schema.Types.ObjectId, ref: 'user' },
    status: String,
    shippingStatus: String,
    trackingNumber: Number,
    total: Number,
});

module.exports = mongoose.model('order', orderSchema);