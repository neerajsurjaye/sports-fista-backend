const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

let router = require('express').Router()

router.get('/:eventId', userController.isAuth, commentController.addComment)
router.post('/:eventId/:commentId')
router.delete('/:eventId/:commentId')


module.exports = router