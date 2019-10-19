const express = require('express');
const userController = require('./controllers/userController')

const routes = express.Router();

routes.post('/register', userController.store);

module.exports = routes;
