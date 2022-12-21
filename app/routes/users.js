const express = require('express')
const router = express.Router()
const {getUser,getUsers,createUser,deleteUser,updatedUser} = require('../controllers/user')
const { validateCreate } = require('../validators/users')

router.get('/',validateCreate,getUsers)
router.get('/:id',getUser)
router.post('/',validateCreate ,createUser)
router.patch('/:id', deleteUser)
router.delete(':id', updatedUser)

module.exports = router