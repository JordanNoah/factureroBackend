const db = require('../models')
const userService = require('./users')
const jwt = require('jsonwebtoken')

const login = async (email,password) => {
    const user = await userService.getUserByEmail(email)
    if (!user) throw new Error('User not found')

    if (user.password == password){
        return jwt.sign({user}, 'secretkey', {expiresIn: "7d"})
    }else{
        throw new Error('Incorrect password')
    }
} 

module.exports = { login }