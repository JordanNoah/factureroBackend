const express = require('express')
const router = express.Router()
const {getUser,getUsers,getUserLogin,createUser,deleteUser,updatedUser,createforgotpassword} = require('../controllers/user')
const { validateCreate,validateforgotpasswordstepone } = require('../validators/users')

router.get('/',getUsers)
router.get('/:uuid',getUser)
router.post('/',validateCreate ,createUser)
router.patch('/:uuid', updatedUser)
router.delete('/:uuid', deleteUser)
//router.get('/login/:email/:password',getUserLogin)//rutas de login
//router.post('/login/forgotpassword/stepone',validateforgotpasswordstepone,createforgotpassword)//rutas de login

module.exports = router