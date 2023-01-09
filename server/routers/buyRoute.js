const router = require('express').Router()
const buyController = require('../controllers/buyCourseController')
const authorization = require('../middlewares/authorizationUser')

router.post('/buy',(req,res,next) => authorization(req,res,next,'','/login'),buyController.buyCourse)

module.exports = router