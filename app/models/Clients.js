module.exports = (db, DataTypes) => {
    const clients = db.define('client', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        uuid: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        firtsname:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        surname:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        email:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        identificationNumber:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        direction:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        phoneNumber:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return clients
}