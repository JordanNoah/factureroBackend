const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateLogin = [
    check('email').exists().withMessage('Missing param').isEmail().withMessage('Format not correct').not().isEmpty().withMessage('Param is empty'),
    check('password').exists().withMessage('Missing param').not().isEmpty().withMessage('Param password is empty'),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]

module.exports = { validateLogin }