const { v4: uuidv4 } = require('uuid')
const {httpError} = require('../helpers/handleError')
const db = require('../models')

const getUsers = (req,res) =>{

}
const getUser = (req,res) =>{

}
const createUser = async (req,res) => {
    try {
        const [user,create] = await db.user.findOrCreate({
            where:{
                email:req.body.email
            },
            defaults:{
                uuid:uuidv4(),
                email:req.body.email,
                name:req.body.name,
                username:req.body.username,
                password:req.body.password
            }
        })
        if(!create){
            throw new Error('Email already exist')
        }else{
            res.send([create,user])
        }
    } catch (error) {
        httpError(res,error)
    }
}
const updatedUser = (req,res) =>{

}
const deleteUser = (req,res) =>{

}

module.exports = {getUsers,getUser,createUser,updatedUser,deleteUser}