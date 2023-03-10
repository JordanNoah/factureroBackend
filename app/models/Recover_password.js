module.exports = (db, DataTypes) => {
    const recover_password = db.define('recover_password', {
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
        code:{
            type: DataTypes.TEXT,
            allowNull:false
        }
    })
    return recover_password
}