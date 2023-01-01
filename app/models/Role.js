module.exports = (db, DataTypes) => {
    const roles = db.define('role',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        uuid: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        shortName:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return roles
}