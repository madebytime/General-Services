const { Schema, model } = require('mongoose');
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcrypt');


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
    password: {
        type: String,
        required: true,
        select: false,
    },

}, {
    timestamps: true,
});

UserSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
})


module.exports = model('User', UserSchema);
