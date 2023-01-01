const {httpError} = require('../helpers/handleError')
const { login } = require('../services/login')

const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body
        var response = await login(email,password)
        res.status(200).json({token:response})
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = { loginUser } 