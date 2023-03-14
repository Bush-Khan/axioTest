const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

const ucontroller = new userController()

router.post('/createUser',ucontroller.createUser)
router.post('/user',ucontroller.user)
router.get('/getData',ucontroller.getData)
router.get('/data',ucontroller.data)
module.exports = router