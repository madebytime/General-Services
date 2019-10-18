const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    dtNascimento: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});