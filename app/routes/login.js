const express = require('express')
const router = express.Router()
const { loginUser } = require('../controllers/login')
const { validateLogin } = require('../validators/login')

router.post('/',validateLogin,loginUser)

module.exports = router