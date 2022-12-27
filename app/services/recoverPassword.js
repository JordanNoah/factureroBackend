const { v4: uuidv4 } = require('uuid')
const { httpError } = require('../helpers/handleError')
const { getUserByEmail } = require("./users")
const db = require('../models')

const createdRecoverPassword = async(user) => {
    return [forgotpassword, create] = await db.recover_password.findOrCreate({
        where:{
            userId:user.id
        },
        defaults:{
            uuid:uuidv4(),
            userId:user.id,
            code:Math.floor(100000 + Math.random() * 900000)
        }
    })
}

const updatedRecoverPassword = async (user) => {
    return await db.recover_password.update({
        uuid:uuidv4(),
        userId:user.id,
        code:Math.floor(100000 + Math.random() * 900000)
    },{
        where:{
            userId:user.id
        }
    })
}

const getRecoverPasswordByUuid = async (uuid) => {
    return await db.recover_password.findOne({where:{uuid:uuid}})
}

const getAllRecoverPasswords = async () => {
    return await db.recover_password.findAll()
}

const deleteTicket = async (uuid) => {
    return await db.recover_password.destroy({
        where:{uuid:uuid}
    })
} 
module.exports = {deleteTicket,getAllRecoverPasswords,createdRecoverPassword,updatedRecoverPassword,getRecoverPasswordByUuid}