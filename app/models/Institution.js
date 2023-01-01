module.exports = (db,DataTypes) => {
    const institution = db.define('institution',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        uuid: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        businessName:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        tradeName:{
            type: DataTypes.TEXT,
            allowNull: false
        },
    })
    return institution
}