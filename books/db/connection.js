const mongoose = require('mongoose');

const dbURL = 'mongodb://ttn:ttn@localhost:27017/node_microservices';  // local connection

function connect() {
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("db started")
    }).catch(err => {
        console.log("error while connecting to DATABASE", err);
    });
}

module.exports = connect;

