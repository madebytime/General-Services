const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./src/routes');

mongoose.connect('mongodb+srv://generalservices:admin@maragogipeinc-zttkn.mongodb.net/generalserv?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
});


const app = express();

app.use(express.json());
app.use(routes);



app.listen(3333);
