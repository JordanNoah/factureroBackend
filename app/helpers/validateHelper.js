const { validationResult } = require('express-validator')

const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    return `${msg}`;
  };

const validateResult = (req,res,next) => {
    try {
        validationResult(req).formatWith(errorFormatter).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.send({errors: error.mapped()})
    }
}

module.exports = { validateResult }