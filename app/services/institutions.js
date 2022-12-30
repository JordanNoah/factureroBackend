const { v4: uuidv4} = require('uuid')
const { UUIDV4 } = require("sequelize")
const db = require("../models")

const getInstitution = async (uuid) => {
    return await db.institution.findOne({where:{uuid:uuid}})
}


const getAllInstitutions = async() => {
    return await db.institution.findAll()
}

const createdInstitutions = async (ruc,businessName,tradename) => {
    return[institution,create] = await db.institution.findOrCreate({
        where:{
            ruc:ruc
        },
        defaults:{
            uuid:uuidv4(),
            ruc,
            businessName,
            tradename
        }
    })


}

const updatedInstitution = async (uuid,businessName,tradename,ruc) => {
    const update = {}
    if(businessName) update.businessName = businessName
    if(tradename) update.tradename = tradename
    if(ruc) update.ruc = ruc

    var institution = await getInstitution(uuid)

    if(institution) {
        return await db.institution.update(
            update,
            {
                where:{
                    uuid:uuid
                }
            }

        )
    }else {
        throw new Error('Institution not found')
    }
}


module.exports = { getAllInstitutions,createdInstitutions,updatedInstitution,getInstitution}