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
        BusinessName:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        Tradename:{
            type: DataTypes.TEXT,
            allowNull: false
        },
    })
    return institution
}