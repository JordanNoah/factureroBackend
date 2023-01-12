require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

const { initSeeders } = require('./app/services/services')

const db = require('./app/models')

app.use(cors())
app.use(express.json())

app.use('/api/1.0',require('./app/routes'))

db.sequelize.sync({
    force:false
}).then(async ()=> {
    await initSeeders()
    app.listen(PORT, () => {
        console.log(`Escuchando en el puerto *:${PORT}`);
    })
})