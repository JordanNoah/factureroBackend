'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const {
    DataTypes,
    Op
} = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_NAME, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect:'mysql'
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
/**
 */
db.context_user_institution.belongsTo(db.user)
db.context_user_institution.belongsTo(db.institution)
db.context_user_institution.belongsTo(db.role)
db.invoice.belongsTo(db.context_user_institution)
db.invoice.belongsTo(db.client)
db.recover_password.belongsTo(db.user)
db.product.belongsTo(db.user)
db.product_package.belongsTo(db.product)
db.product_package.belongsTo(db.package)
db.invoice.belongsTo(db.status_invoice)
db.branch.belongsTo(db.institution)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.op = Op;
module.exports = db;