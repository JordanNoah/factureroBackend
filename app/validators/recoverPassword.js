const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
    check('email').exists().withMessage('Missing param').isEmail().withMessage('Format not correct').not().isEmpty().withMessage('Param is empty'),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]

module.exports = {validateCreate}