let router = require('express').Router()
let eventController = require('../controllers/eventController')


router.get('/:eventid', eventController.getEventDetails)
router.get('/page/:page', eventController.getEvents)


module.exports = router