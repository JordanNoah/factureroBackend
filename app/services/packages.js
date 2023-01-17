const { v4: uuidv4} = require('uuid')
const db = require("../models")

const getPackages = async () => {
    return await db.package.findAll()
}

const createdPackage = async (name,institutionId) => {
    var uniqshortname = name.toLowerCase().replaceAll(/\s/g,'')

    return [package,create] = await db.package.findOrCreate({
        where:{
            shortname:uniqshortname,
            institutionId
        },
        defaults:{
            uuid:uuidv4(),
            name,
            shortname:uniqshortname
        }
    })
}

const getPackage = async (uuid) => {
    return await db.package.findOne({
        where:{
            uuid
        }
    })
}

const updatedPackage = async (uuid,name) => {
    const update = {}
    if (name) update.name = name

    var package = await getPackage(uuid)

    if(!package) throw new Error('Package not found')

    return await db.package.update(
        update,{
            where:{
                uuid
            }
        }
    )
}

const deletedPackage = async (uuid) => {
    var package = await getPackage(uuid)

    if(!package) throw new Error('Package not found')

    return await db.package.destroy({
        where:{
            uuid
        }
    })
}

module.exports = {
    getPackages,
    createdPackage,
    getPackage,
    deletedPackage,
    updatedPackage
}