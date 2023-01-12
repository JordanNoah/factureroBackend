const {
    check
} = require('express-validator')
const {
    validateResult
} = require('../helpers/validateHelper')

const validateCreated = [
    check('institutionUuid').exists().withMessage("Param not found").not().isEmpty().withMessage("Param is empty"),
    check('name').exists().withMessage("Param not found").not().isEmpty().withMessage("Param is empty"),
    check('location').exists().withMessage("Param not found").not().isEmpty().withMessage("Param is empty"),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]

module.exports = {validateCreated}