module.exports = (db, DataTypes) => {
    const package = db.define('package', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        uuid: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return package
}