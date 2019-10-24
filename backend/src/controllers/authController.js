const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
module.exports = {
    async login(req, res) {
        const { email, senha } = req.body;
        user = await User.findOne({ email }).select('+senha');
        if (!user)
            return res.status(400).send({ error: 'Usuário não encontrado' });

        if (!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: 'Senha invalida' });

        user.senha = undefined;

        res.json({ user});
    }
}