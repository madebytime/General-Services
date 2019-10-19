const User = require('../models/User');

module.exports = {
    async store(req, res) {

        const { nome, cpf, dtNascimento, email, senha } = req.body;

        let user = await User.findOne({email,cpf});
        if(!user){
            user = await User.create({ nome, cpf, dtNascimento,email,senha});
        }
        return res.json(user);
    }
}
