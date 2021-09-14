let router = require('express').Router()
let eventController = require('../controllers/eventController')
let userController = require('../controllers/userController')

router.post('/', userController.isAuth, eventController.isOrg, eventController.createEvent)
router.get('/:eventid', eventController.getEventDetails)
router.get('/page/:page', eventController.getEvents)



module.exports = router