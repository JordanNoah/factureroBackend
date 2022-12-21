module.exports = (db,DataTypes) => {
    const contextUserInstitution = db.define('context_user_institution',{
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
    return contextUserInstitution
}