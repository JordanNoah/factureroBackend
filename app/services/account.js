const { v4 : uuidv4 } = require('uuid')
const db = require('../models')
const {getUser} = require('./users')
const {getRole} = require('./role')

const getUserInstitutionRole = async(userUuid) => {
    var user = await getUser(userUuid)
    
    if(!user) throw new Error("User not found")

    var getActiveAccount = db.context_user_institution.findOne(
        {
            where:{
                main:true,
                userId:user.id
            },
            include:[
                {
                    model:db.role
                },
                {
                    model:db.institution
                },
                {
                    model:db.user
                }
            ]
        }
    )
    
    return getActiveAccount
}

const createUserInstitution = async(user,institution,role) => {
    const rolefind = await getRole(role)

    var where = {
        userId:user.id,
        institutionId:institution.id,
        roleId:rolefind.id
    }

    if(role=='Admin'){where.main = true}else{where.main = false}

    return [contextUserInstitution,create] = await db.context_user_institution.findOrCreate({
        where,
        defaults:{
            uuid:uuidv4(),
            main:where.main,
            userId:where.userId,
            institutionId:where.institutionId,
            roleId:where.roleId
        }
    })
}

module.exports = {
    getUserInstitutionRole,
    createUserInstitution
}