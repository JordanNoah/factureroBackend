module.exports = (db, DataTypes) => {
    const status_invoice = db.define('status_invoice', {
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
    return status_invoice
}