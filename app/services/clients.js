const {
    v4: uuidv4
} = require('uuid')
const db = require("../models")

const getClient = async (uuid) => {
    return await db.client.findOne({
        where: {
            uuid: uuid
        }
    })
}

const getAllClients = async () => {
    return await db.client.findAll({
        include:[
            {
                model:db.institution
            }


        ]


    })

}

const deletedClient = async (uuid) => {
    var client = await getClient(uuid)

    if (!client) throw new Error('Client not found')


    return await db.client.destroy({
        where: {
            uuid: uuid
        }
    })
}


const createdClient = async (firtsname,surname,email,identificationNumber,direction,phoneNumber,institutionId) => {
    return [client,create] = await db.client.findOrCreate({
        where:{
            email:email,
            identificationNumber:identificationNumber
        },
        defaults:{
            uuid:uuidv4(),  
            firtsname,
            surname,
            email,
            identificationNumber,
            direction,
            phoneNumber,
            institutionId
        }
    })
}

const updatedClient = async(uuid,firtsname,surname,email,identificationNumber,direction,phoneNumber,institutionId) =>{
const update = {}
if(firtsname) update.firtsname = firtsname
if(surname) update.surname = firtsname
if(email) update.email = email
if(identificationNumber) update.identificationNumber= identificationNumber
if(direction) update.direction = direction
if(phoneNumber) update.phoneNumber = phoneNumber
if(institutionId) update.institutionId = institutionId

var client = await getClient(uuid)
if(client) {
    return await db.client.update(
    update,
    {
        where:{
            uuid:uuid

        }
    }

    )
}else {
    throw new Error('Client Not found')
}

}



module.exports = {
    getClient,getAllClients,deletedClient,createdClient,updatedClient
}