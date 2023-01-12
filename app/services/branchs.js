const { v4: uuidv4 } = require('uuid')
const db = require('../models')

const getBranchByUuid = async (uuid) => {
    return await db.branch.findOne({where:{uuid}})
}

const createdBranch = async (institution,name,location) => {
    var uniqshortname = name.toLowerCase().replaceAll(/\s/g,'')
    
    return [branch,create] = await db.branch.findOrCreate({
        where:{
            institutionId:institution.id,
            shortname:uniqshortname
        },
        defaults:{
            institutionId:institution.id,
            shortname:uniqshortname,
            uuid:uuidv4(),
            name:name,
            location:location
        }
    })
}

const getAllBranchs = async() =>{
    return await db.branch.findAll()
}

const getAllBranchsByInstitution = async (institution) => {
    return await db.branch.findAll({
        where:{
            institutionId: institution.id
        }
    })
}

const updatedBranch = async (institution,uuid,name,location) => {
    const update = {}
    if(institution) update.institutionid = institution.id
    if(name) update.name = name
    if(location) update.location = location
    update.shortname = name.toLowerCase().replaceAll(/\s/g,'')

    return await db.branch.update(
        update,
        {
            where:{
                uuid
            }
        }
    )
}

const deletedBranch = async (uuid) => {
    var branch = await getBranchByUuid(uuid)
    if(branch){
        return await db.branch.destroy({
            where:{uuid:uuid}
        })
    }else{
        throw new Error('Branch not found')
    }
}

module.exports = {
    getBranchByUuid,
    createdBranch,
    getAllBranchs,
    getAllBranchsByInstitution,
    updatedBranch,
    deletedBranch
}