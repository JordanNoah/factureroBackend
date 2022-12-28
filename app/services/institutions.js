const { v4: uuidv4} = require('uuid')
const { UUIDV4 } = require("sequelize")
const db = require("../models")

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

module.exports = { getAllInstitutions,createdInstitutions }