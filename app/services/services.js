const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename);
const db = require('../models')
const roles = require('../seeders/roles')

const getAll = async () => {
    var services = []

    fs.readdirSync(__dirname).filter(file => { 
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
     }).forEach(file => {
        var service = new Object
        service.name = file.split(".")[0]
        service.service = Object.keys(require(path.join(__dirname, file)))
        
        services.push(service)
     })
     return services
}

const initSeeders = async () => {
    roles.forEach( async (element) => {
        await db.role.findOrCreate({
            where:{
                shortName:element.shortName
            },
            defaults:{
                uuid:element.uuid,
                name:element.name,
                shortName:element.shortName
            }
        })
    });
}

module.exports = {
    getAll,
    initSeeders
}