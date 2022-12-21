module.exports = (db, DataTypes) => {
    const recover_password = db.define('recover_password', {
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
    return recover_password
}