const express = require('express');
const Router = express.Router();
const customerController = require('./controller/customerController');

Router.get('/customer', customerController.getCustomer);

Router.get('/customer/:id', customerController.getCustomerById);

Router.post('/customer', customerController.addCustomer);

Router.delete('/customer/:id', customerController.deleteCustomerById);

module.exports = Router;