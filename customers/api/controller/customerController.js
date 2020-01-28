const Customer = require('../models/customerModel');


module.exports.getCustomer = (req, res) => {
    Customer.find({}).then((Customers) => {
        res.send(Customers);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.getCustomerById = (req, res) => {
    Customer.findById(req.params.id).then((data) => {
        if (data) {
            res.send(data)
        }
        else {
            res.send("Invalid ID")
        }
    }).catch(err => {
        res.send(err);
    })
}

module.exports.deleteCustomerById = (req, res) => {
    console.log(">>>>>", req.params.id)
    Customer.findOneAndDelete(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.addCustomer = (req, res) => {
    const { name, age, address } = req.body;
    let newCustomer = new Customer({
        name: name,
        age: age,
        address: address
    });
    newCustomer.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err);
    })
}