const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://generalservices:admin@maragogipeinc-zttkn.mongodb.net/generalserv?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.listen(3333);
