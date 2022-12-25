const { v4: uuidv4 } = require('uuid')
const {httpError} = require('../helpers/handleError')
const services = require('../services/users')
const db = require('../models')

const getUsers = async (req,res) =>{
    try{
        var response = await services.getUsers()
        res.status(200).json({users:response});
    }catch(error){
        httpError(res,error)
    }
}
const getUser = async (req,res) =>{
    try {
        var response = await services.getUser(req.params.uuid)
        res.status(200).json({user:response});
    } catch (error) {
        httpError(res,error)
    }
}
const createUser = async (req,res) => {
    try {

        const {username, name, email, password} = req.body

        let [user,create] = await services.createdUser(email,name,username,password)
        
        if(!create){
            throw new Error('Email already exist')
        }else{
            res.status(200).json({user:user})
        }
    } catch (error) {
        httpError(res,error)
    }
}

const updatedUser = async (req,res) => {
    try {
        const {uuid} = req.params
        const {username, name, email, password} = req.body

        var response = await services.updatedUser(uuid,username, name, email, password)

        if (response) {
            res.status(200).send({user:await services.getUser(uuid)});
        }else{
            throw new Error(`Error updating user with uuid: ${uuid}`)
        }
    } catch (error) {
        httpError(res,error)
    }
}

const deleteUser = async (req,res) =>{
    try {
        const {uuid} = req.params

        const response = await services.deleteUser(uuid)

        if (response) res.status(200).json({removed:true,userUuid:uuid});
        else throw new Error(`Can not remove user with uuid ${uuid}`)
        
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = {getUsers,getUser,createUser,updatedUser,deleteUser}