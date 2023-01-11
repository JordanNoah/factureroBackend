module.exports = (db, DataTypes) => {
    const Branch = db.define('branch', {
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
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        shortname: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Branch
}