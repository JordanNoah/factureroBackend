const {
    v4: uuidv4
} = require('uuid')
const db = require("../models")

const getInstitution = async (uuid) => {
    return await db.institution.findOne({
        where: {
            uuid: uuid
        }
    })
}


const getAllInstitutions = async () => {
    return await db.institution.findAll()
}

const createdInstitutions = async (ruc, businessName, tradeName) => {
    return [institution, create] = await db.institution.findOrCreate({
        where: {
            tradeName
        },
        defaults: {
            uuid: uuidv4(),
            ruc,
            businessName,
            tradeName
        }
    })


}

const updatedInstitution = async (uuid, businessName, tradename, ruc) => {
    const update = {}
    if (businessName) update.businessName = businessName
    if (tradename) update.tradename = tradename
    if (ruc) update.ruc = ruc

    var institution = await getInstitution(uuid)

    if (institution) {
        return await db.institution.update(
            update, {
                where: {
                    uuid: uuid
                }
            }

        )
    } else {
        throw new Error('Institution not found')
    }

}

const deletedInstitution = async (uuid) => {
    var institution = await getInstitution(uuid)

    if (!institution) throw new Error('Institutions not found')


    return await db.institution.destroy({
        where: {
            uuid: uuid
        }
    })
}






module.exports = {
    getAllInstitutions,
    createdInstitutions,
    updatedInstitution,
    getInstitution,
    deletedInstitution
}