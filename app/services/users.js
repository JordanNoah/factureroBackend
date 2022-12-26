const db = require('../models')
const { v4: uuidv4 } = require('uuid')

const getUsers = async () => {
    return await db.user.findAll()
}

const getUser = async (uuid) => {
    return await db.user.findOne({where:{uuid:uuid}})
}

const createdUser = async (email,name,username,password) => {
    return [user,create] = await db.user.findOrCreate({
        where:{
            email:email
        },
        defaults:{
            uuid:uuidv4(),
            email:email,
            name:name,
            username:username,
            password:password
        }
    })
}

const updatedUser = async (uuid,email,name,username,password) => {
    const update = {}
    if (email) update.email = email 
    if (name) update.name = name
    if (username) update.username = username
    if (password) update.password = password

    var user = await getUser(uuid)

    if (user) {
        return await db.user.update(
            update,
            {
                where:{
                    uuid:uuid
                }
            }
        )
    }else{
        throw new Error('User not found')
    }

}

const deleteUser = async(uuid) => {
    var user = await getUser(uuid)

    if (user) {
        return await db.user.destroy({
            where:{uuid:uuid}
        })
    }else{
        throw new Error('User not found')
    }
}

const getUserByEmail = async (email) => {
    return await db.user.findOne({where:{email:email}})
}

const getUserByPk = async (id) => {
    return await db.user.findByPk(id)
}
module.exports = {
    getUsers,
    getUser,
    createdUser,
    updatedUser,
    deleteUser,
    getUserByEmail,
    getUserByPk
}