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
    senha: {
        type: String,
        required: true,
        select: false,
    },

}, {
    timestamps: true,
});

UserSchema.pre('save', async function(next){
    if(!this.isModified("senha")) next();

    this.senha = await bcrypt.hash(this.senha,10);
});

UserSchema.methods = {
    compareHash(hash){
        return bcrypt.compare(hash, this.senha);
    },
    generateToken(){
        return jwt.s({id:this._id}, "secret",{
            expiresIn:86400,
        });
    }

};


module.exports = model('User', UserSchema);
