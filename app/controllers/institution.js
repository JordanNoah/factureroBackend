const {
    httpError
} = require('../helpers/handleError')
const {
    getAllInstitutions,
    createdInstitutions
} = require('../services/institutions')

const services = require('../services/institutions')

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
const updateInstitution = async (req, res) => {
    try {
      const {uuid} = req.params
      const {businessName,tradename,ruc} = req.body
      var response = await services.updatedInstitution(uuid,businessName,tradename,ruc)

      if(response) {
        res.status(200).send({user:await services.getInstitution (uuid)})
      }else{
        throw new Error(`Error updating institution whit uuid: ${uuid} `)
      }
      
    } catch (error) {

        httpError(res, error)
    }
}

module.exports = {
    getInstitutions,
    createInstitutions,
    updateInstitution
}