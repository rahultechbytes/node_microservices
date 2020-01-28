const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const route = require('./api/route');
const dbConnect = require('./db/connection');

// db connection
dbConnect()            

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.use('/', route);

app.listen(PORT, () => {
    console.log('server is up for CUSTOMER SERVICE and running at port: ', PORT);
})
