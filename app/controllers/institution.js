const {
    httpError
} = require('../helpers/handleError')
const {
    getAllInstitutions,
    createdInstitutions
} = require('../services/institutions')

const createInstitutions = async (req, res) => {
    try {
        const{ruc,tradename,businessName} = req.body

        var [institution,create] = await createdInstitutions (ruc,businessName,tradename)
        if(!create){
            throw new Error("Institution already exist")
        }else {
            res.status(200).json({institution})
        }
    } catch (error) {
        httpError(res, error)
    }

}
const getInstitutions = async (req, res) => {
    try {
        var response = await getAllInstitutions()
        res.status(200).json({
            institutions: response
        })
    } catch (error) {
        httpError(res, error)
    }
}
const updatedInstitutions = async (req, res) => {
    try {
        var uuid = req.params
        var {
            password
        } = req.body
        var ticket = getRecoverPasswordByUuid(uuid)
        console.log(ticket);
    } catch (error) {
        console.log(error);
        httpError(res, error)
    }
}

module.exports = {
    getInstitutions,
    createInstitutions
}