const {
    check
} = require('express-validator')
const {
    validateResult
} = require('../helpers/validateHelper')

const validateCreated = [
    check('user').notEmpty().withMessage("User is empty").exists().withMessage("missing param"),
    check('tradeName').notEmpty().withMessage("Trade name is empty").exists().withMessage("missing param"),
    check('businessName').notEmpty().withMessage("Name is empty ").exists().withMessage("Missing param"),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]



module.exports = {validateCreated}