const jwt = require('jsonwebtoken')
require('dotenv').config()


const authorizationUser = async (req,res,next,successRedirect,failRedirect) => {
    try {

        const token = req.session.token
        
        if(token){
            const payload = jwt.verify(token,process.env.SECRET_KEY)
            req.user = payload.userID
            if(successRedirect) res.redirect(successRedirect)
            else next()
        }
        else{
            if(failRedirect) {
                res.redirect(failRedirect)
            }else{
                next()
            }
            
            //res.status(401).json(false)
        }   

    } catch (error) {
        console.error(error.message + ' at authorization.js')
        res.status(401).json(false)
    }
} 

module.exports = authorizationUser