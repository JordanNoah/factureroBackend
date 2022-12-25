const { v4: uuidv4 } = require('uuid')
const { httpError } = require('../helpers/handleError')
const db = require('../models')


const createTicket = async (req,res) => {
    try {
        var user = await db.user.findOne({where:{email:req.body.email}})
        if(user){
            var [forgotpassword, create] = await db.recover_password.findOrCreate({
                where:{
                    userId:user.id
                },
                defaults:{
                    uuid:uuidv4(),
                    userId:user.id,
                    code:Math.floor(100000 + Math.random() * 900000)
                }
            })
            if (create) {
                res.status(200).json({message:'Email sended to your email'})
            }else{
                var updated = await db.recover_password.update({
                    uuid:uuidv4(),
                    userId:user.id,
                    code:Math.floor(100000 + Math.random() * 900000)
                },{
                    where:{
                        userId:user.id
                    }
                })
                if(updated){
                    await db.recover_password.findOne({where:{
                        userId:user.id
                    }})
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

const checkTicket = async(req,res) => {
    console.log(req.params.uuid);
    try {
        const ticket = await db.recover_password.findOne({
            where:{
                uuid:req.params.uuid
            }
        })
        if (ticket){
            res.status(200).json({ticket:ticket})
        }else{
            res.status(404).send("Ticket doesn't exist")
        }
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = {createTicket,checkTicket}