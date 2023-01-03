module.exports = (db,DataTypes) => {
    const contextUserInstitution = db.define('context_user_institution',{
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
        main:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    })
    return contextUserInstitution
}