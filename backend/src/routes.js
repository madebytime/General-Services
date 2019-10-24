const express = require('express');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

const routes = express.Router();

routes.post('/register', userController.cadastro);
routes.post('/authenticate', authController.login);

module.exports = routes;
