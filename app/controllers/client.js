const {
    httpError
} = require('../helpers/handleError')

const {
    getAllClients,deletedClient,createdClient,updatedClient
} = require('../services/clients')

const {
    getInstitution
} = require('../services/institutions')
const db = require('../models')

const getClient = async (req, res) => {
    try {
        var response = await getAllClients()
        res.status(200).json({
            Clients: response
        })
    } catch (error) {
        httpError(res, error)
    }
}

const getClientuuid = async (uuid) => {
    return await db.client.findOne({where:{uuid:uuid}})
}

const deleteClient = async (req,res) =>{
    try {
        const {uuid} = req.params

        const response = await deletedClient(uuid)

        if (response) res.status(200).json({removed:true,clientUuid:uuid});
        else throw new Error(`Can not remove Client with uuid ${uuid}`)
        
    } catch (error) {
        httpError(res,error)
    }
}


const createClient = async(req,res) =>{
 try {
    const{firtsname,surname,email,identificationNumber,direction,phoneNumber,institution} = req.body
    
    const institutionsDB = await getInstitution(institution)
console.error(institutionsDB.id);
    if(!institutionsDB) throw new Error('Institutions not found')
    const[client,create] = await  createdClient(firtsname,surname,email,identificationNumber,direction,phoneNumber,institutionsDB.id)
    
    if(!create){
        throw new Error('Client already exits')
    }else{
        res.status(200).json({client:client})
    }


 } catch (error) {
    httpError(res, error)
 }
}

const updateClient = async(req,res)=>{

    try {
const {uuid} = req.params
const{firtsname,surname,email,identificationNumber,direction,phoneNumber} = req.body
    
var response = await updatedClient(uuid,firtsname,surname,email,identificationNumber,direction,phoneNumber)

if(response){
    res.status(200).send({client:await getClientuuid(uuid)}); 
}else {
    throw new Error(`Error updating client whit uuid: ${uuid}`)
}


} catch (error) {
        httpError(res,error)
    }

}


module.exports = {
    getClient,getAllClients,deleteClient,createClient,updateClient
}