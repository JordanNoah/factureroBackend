module.exports = (db, DataTypes) => {
    const product = db.define('product', {
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
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        brand:{
            type: DataTypes.TEXT,
            allowNull: true
        }
    })
    return product
}