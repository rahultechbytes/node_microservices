const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    CustomerId: {
        type: String,
        required: true
    },
    BookId: {
        type: String,
        required: true
    },
    InitialDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;