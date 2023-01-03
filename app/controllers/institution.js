const {
    httpError
} = require('../helpers/handleError')
const {
    getAllInstitutions,
    createdInstitutions,
    updatedInstitution,
    getInstitution
} = require('../services/institutions')

const { createUserInstitution } = require('../services/account')
const {getUser} = require('../services/users')

const createInstitutions = async (req, res) => {
    try {
        const{ruc,tradeName,businessName,user} = req.body

        const userDb = await getUser(user)
        
        if(!userDb) throw new Error('User not found')
        
        var [institution,createInstitution] = await createdInstitutions (ruc,businessName,tradeName)

        var [userInstitution,createAdmin] = await createUserInstitution(userDb,institution,'Admin')

        if(!createInstitution && !createAdmin){
            if(!createAdmin){
                throw new Error("Institution already exist")
            }else{
                throw new Error("Role couldn't be assigned")
            }
        }else {
            res.status(200).json({institution,userInstitution})
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
      var response = await updatedInstitution(uuid,businessName,tradename,ruc)

      if(response) {
        res.status(200).send({user:await getInstitution (uuid)})
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