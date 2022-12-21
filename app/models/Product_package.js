module.exports = (db, DataTypes) => {
    const product_package = db.define('product_package', {
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
    return product_package
}