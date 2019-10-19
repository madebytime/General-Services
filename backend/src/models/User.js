const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true,

    },
    dtNascimento: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },

}, {
    timestamps: true,
});


module.exports = model('User', UserSchema);
