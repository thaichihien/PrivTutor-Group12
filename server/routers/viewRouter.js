const router = require('express').Router()
const renderController = require('../controllers/renderController')


// TODO render index
router.get('/mycourse',renderController.renderMyCourse)
router.get('/discovery',renderController.renderDiscovery)
router.get('/course/:id',renderController.renderDetailCourse)
router.get('/',renderController.renderIndex);



module.exports = router