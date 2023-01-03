const { v4 : uuidv4 } = require('uuid')
const db = require('../models')

const getRole = async(shortName) => {
    return await db.role.findOne({
        where : {
            shortName
        }
    })
} 

module.exports = {
    getRole
}