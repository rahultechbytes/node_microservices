const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cust_Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', cust_Schema);

module.exports = Customer;