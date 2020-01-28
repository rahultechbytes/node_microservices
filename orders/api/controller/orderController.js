const order = require('../models/orderModel');
const axios = require('axios');

module.exports.getorder = (req, res) => {
    order.find().then((orders) => {
        res.send(orders);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.getorderById = (req, res) => {
    order.findById(req.params.id).then(order => {
        if (order) {
            axios.get('http://localhost:3001/customer/' + order.CustomerId).then((resp) => {
                let orderObj = { customerName: resp.data.name }
                axios.get('http://localhost:3000/books/' + order.BookId).then((resp) => {
                    orderObj.bookTitle = resp.data.title;
                    res.json(orderObj);
                })
            });
        }
    }).catch(err => {
        res.send(err);
    })
}

module.exports.deleteorderById = (req, res) => {
    order.findOneAndRemove(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.addorder = (req, res) => {
    const { CustomerId, BookId, InitialDate, deliveryDate } = req.body;
    let neworder = new order({
        CustomerId: CustomerId,
        BookId: BookId,
        InitialDate: InitialDate,
        deliveryDate: deliveryDate
    });
    neworder.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}