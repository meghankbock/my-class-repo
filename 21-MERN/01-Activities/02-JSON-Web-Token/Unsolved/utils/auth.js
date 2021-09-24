const jwt = require('jsonwebtoken');

const secret = 'secret';
const expiration = '1h';

module.exports = {
    signToken: function({ email, _id }) {
        const payload = { email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};