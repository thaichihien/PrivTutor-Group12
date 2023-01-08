const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtGenerator = (ID,key = 'SECRET_KEY',expires = '1h') => {
    const payload = {
        userID : ID
    }

    return jwt.sign(payload,process.env[key],{expiresIn : expires})
}

module.exports = jwtGenerator