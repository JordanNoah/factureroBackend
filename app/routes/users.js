const express = require('express')
const router = express.Router()
const {getUser,getUsers,getUserLogin,createUser,deleteUser,updatedUser,createforgotpassword} = require('../controllers/user')
const { validateCreate,validateforgotpasswordstepone } = require('../validators/users')

router.get('/',getUsers) //get all
router.get('/:uuid',getUser) // get user by uuid
router.post('/',validateCreate ,createUser) // create user
router.patch('/:uuid', updatedUser) // update user by uuid
router.delete('/:uuid', deleteUser) // delete user by uuid
//router.get('/login/:email/:password',getUserLogin)//rutas de login
//router.post('/login/forgotpassword/stepone',validateforgotpasswordstepone,createforgotpassword)//rutas de login

module.exports = router