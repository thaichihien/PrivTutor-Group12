const router = require('express').Router()
const renderController = require('../controllers/renderController')
const authorization = require('../middlewares/authorizationUser')

// TODO render index
router.get('/login',(req,res,next) => authorization(req,res,next,'/',''),(req,res) => res.render('Login'))
router.get('/register',(req,res,next) => authorization(req,res,next,'/',''),(req,res) => res.render('Register'))
router.get('/mycourse',(req,res,next) => authorization(req,res,next,'','/login'),renderController.renderMyCourse)
router.get('/discovery',renderController.renderDiscovery)
router.get('/course/:id',renderController.renderDetailCourse)
router.get('/',(req,res,next) => authorization(req,res,next,'',''),renderController.renderIndex);



module.exports = router