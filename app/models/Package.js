module.exports = (db, DataTypes) => {
    const package = db.define('package', {
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
        shortname:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return package
}