const router = require('express').Router()
const renderController = require('../controllers/renderController')
const authorization = require('../middlewares/authorizationUser')

// TODO render index
router.get('/cart',(req,res,next) => authorization(req,res,next,'','/login'),renderController.renderCart)
router.get('/login',(req,res,next) => authorization(req,res,next,'/',''),(req,res) => res.render('Login'))
router.get('/register',(req,res,next) => authorization(req,res,next,'/',''),(req,res) => res.render('Register'))
router.get('/mycourse',(req,res,next) => authorization(req,res,next,'','/login'),renderController.renderMyCourse)
router.get('/discovery',(req,res,next) => authorization(req,res,next,'',''),renderController.renderDiscovery)
router.get('/course',(req,res,next) => authorization(req,res,next,'',''),renderController.renderDetailCourse)
router.get('/',(req,res,next) => authorization(req,res,next,'',''),renderController.renderIndex);



module.exports = router