const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ erro: 'Token não provido' });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)    
        return res.status(401).send({ error: 'Erro de Token' });


    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado' });

    jwt.verify (token , authConfig.secret, (err,decoded) =>{
        if(err)
        res.status(401).send({error:'Token inválido'})

        req.userId = decoded._id;
        return next();
    })





}