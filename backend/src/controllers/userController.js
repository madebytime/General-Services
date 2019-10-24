const User = require('../models/User');


module.exports = {
    async cadastro(req, res) {

        const { nome, cpf, dtNascimento, email, senha } = req.body;

        let user = await User.findOne({ email, cpf });
        if (!user) {
            user = await User.create({ nome, cpf, dtNascimento, email, senha });
            user.senha = undefined;
        }
        return res.json(user);
    }

}


