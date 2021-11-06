let router = require('express').Router()
let eventController = require('../controllers/eventController')
let userController = require('../controllers/userController')

let multer = require('multer')

let storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});

let upload = multer({ storage })

router.post('/', userController.isAuth, eventController.isOrg, eventController.createEvent)
router.post('/upload-event-image', userController.isAuth, eventController.isOrg, upload.single('image'), eventController.uploadEventImage)
router.get('/:eventId', eventController.getEventDetails)
router.get('/page/:page', eventController.getEvents)
router.delete('/:eventid')



module.exports = router