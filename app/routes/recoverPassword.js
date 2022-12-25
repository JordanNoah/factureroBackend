const express = require('express')
const router = express.Router()
const {createTicket, checkTicket, updatedPassword} = require('../controllers/recoverPassword')
const { validateCreate } = require('../validators/recoverPassword')

router.post('/',validateCreate,createTicket)
router.get('/:uuid',checkTicket)
router.patch('/:uuid')

module.exports = router