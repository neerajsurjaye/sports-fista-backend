let router = require('express').Router()
let userController = require('../controllers/userController')

router.get('/get-current-user', userController.isAuth, userController.getCurrentUser)
router.post('/sign-up', userController.signup)
router.post('/log-in', userController.login)

module.exports = router