const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('./config/auth')
const User = require('../models/User');

const router = express.Router();

function generateToken(params = {}){
    return  jwt.sign(params, authConfig.secret,{
        expiresIn:86400,
    });
}
router.post('/register', async (req, res) => {
    const { cpf, email } = req.body;
    try {
        if (await User.findOne({ cpf, email }))
            return res.status(400).send({ error: 'Usuário já existe' });

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({ user, token: generateToken({_id: user._id}) });

    } catch (err) {
        return res.status(400).send({ error: ' Registration Failed' });

    }

});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password')

    if (!user)
        return res.status(400).send({ erro: 'Usuário não encontrado' })

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida' })

    user.password = undefined;

    res.send({ user,token: generateToken({_id: user._id}) });

});

module.exports = app => app.use('/auth', router);