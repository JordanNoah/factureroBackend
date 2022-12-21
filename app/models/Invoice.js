module.exports = (db, DataTypes) => {
    const invoice = db.define('invoice', {
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
    return invoice
}