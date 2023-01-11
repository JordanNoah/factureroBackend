const { v4: uuidv4 } = require('uuid')
const db = require('../models')
const { getInstitution } = require('./institutions')

const getBranchByUuid = async (uuid) => {
    return await db.branch.findOne({where:{uuid}})
}

const createdBranch = async () => {
    const institution = await getInstitution()

    if(!institution) throw new Error('Institution not found')


}

module.exports = {
    getBranchByUuid
}