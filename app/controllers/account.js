const {httpError} = require('../helpers/handleError')
const { getUserInstitutionRole } = require('../services/account')

const getAccount = async (req,res) => {
    try {
        var { userUuid } = req.params
        var response = await getUserInstitutionRole(userUuid)
        res.status(200).json({account:response})
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = { getAccount } 