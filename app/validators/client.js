const {
    check
} = require('express-validator')
const {
    validateResult
} = require('../helpers/validateHelper')

const validateCreated = [
    check('firtsname').notEmpty().withMessage("Firtsname is empty").exists().withMessage("missing param"),
    check('surname').notEmpty().withMessage("Surname is empty").exists().withMessage("missing param"),
    check('email').notEmpty().withMessage("Email is empty").exists().withMessage("missing param"),
    check('identificationNumber').notEmpty().withMessage("IdentificationNumber is empty").exists().withMessage("missing param"),
    check('direction').notEmpty().withMessage("Direction is empty").exists().withMessage("missing param"),
    check('phoneNumber').notEmpty().withMessage("PhoneNumber is empty").exists().withMessage("missing param"),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]


module.exports = {validateCreated}