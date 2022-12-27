const express = require('express')
const router = express.Router()
const {
    getRecoverPasswords,
    createRecoverPassword,
    getRecoverPassword,
    updatedPassword
} = require('../controllers/recoverPassword')
const {
    validateCreate,validateRecoverPassword
} = require('../validators/recoverPassword')

router.post('/', validateCreate, createRecoverPassword)
router.get('/:uuid', getRecoverPassword)
router.get('/', getRecoverPasswords)
router.patch('/:uuid',validateRecoverPassword,updatedPassword)

module.exports = router