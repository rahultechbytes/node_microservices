const express = require('express');
const router = express.Router();
const orderController = require('./controller/orderController');

router.get('/order', orderController.getorder);

router.get('/order/:id', orderController.getorderById);

router.post('/order', orderController.addorder);

router.delete('/order/:id', orderController.deleteorderById);

module.exports = router;