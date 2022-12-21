module.exports = (db, DataTypes) => {
    const user = db.define('user', {
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
        email:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        username:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        password:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return user
}