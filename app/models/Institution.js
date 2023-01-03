module.exports = (db,DataTypes) => {
    const institution = db.define('institution',{
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
        businessName:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        tradeName:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        ruc:{
            type: DataTypes.TEXT,
            allowNull: true    
        }
    })
    return institution
}