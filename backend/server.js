
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://generalservices:admin@maragogipeinc-zttkn.mongodb.net/generalserv?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const app = express();

app.use(express.json());
require('./src/controllers/authController')(app);
require('./src/controllers/servicesController')(app);



app.listen(3333);
