const { v4: uuidv4 } = require('uuid')
const { httpError } = require('../helpers/handleError')
const { getUserByEmail } = require("../services/users")
const { createdRecoverPassword,updatedRecoverPassword,getRecoverPasswordByUuid,getAllRecoverPasswords} = require("../services/recoverPassword")
const db = require('../models')


const createRecoverPassword = async (req,res) => {
    try {
        var user = await getUserByEmail(req.body.email)
        if(user){
            var [forgotpassword, create] = await createdRecoverPassword(user)
            if (create) {
                res.status(200).json({message:'Email sended to your email'})
            }else{
                var updated = await updatedRecoverPassword(user)
                if(updated){
                    res.status(200).json({message:'Email sended to your email'})
                }
            }
        }else{
            throw new Error("User not found")
        }
    } catch (error) {
        httpError(res,error)
    }
}

const getRecoverPassword = async (req,res) => {
    try {
        const ticket = await getRecoverPasswordByUuid(req.params.uuid)
        if (ticket){
            res.status(200).json({ticket:ticket})
        }else{
            res.status(404).send("Ticket doesn't exist")
        }
    } catch (error) {
        httpError(res,error)
    }
}

const getRecoverPasswords = async (req,res) => {
    try {
        var tickets = await getAllRecoverPasswords()
        res.status(200).json({tickets:tickets})
    } catch (error) {
        httpError(res, error)
    }
}

const updatedPassword = async (req,res) => {
    try {
        var uuid = req.params
        var { password } = req.body
        var ticket = getRecoverPasswordByUuid(uuid)
        console.log(ticket);
    } catch (error) {
        console.log(error);
        httpError(res,error)
    }
}

module.exports = {createRecoverPassword,getRecoverPassword,getRecoverPasswords,updatedPassword}