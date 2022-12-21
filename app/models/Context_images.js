module.exports = (db, DataTypes) => {
    const Context_images = db.define('context_images', {
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
    return Context_images
}