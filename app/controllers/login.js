const {httpError} = require('../helpers/handleError')
const { login } = require('../services/login')

const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body
        await login(email,password)
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = { loginUser } 