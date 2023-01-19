var express = require("express")
var router = express.Router()
var {getClient,deleteClient,createClient,updateClient} = require("../controllers/client")
var {
    validateCreated
} = require("../validators/client")
router.get("/", getClient)
router.delete('/:uuid', deleteClient)
router.post("/", validateCreated, createClient)
router.patch('/:uuid',updateClient)


module.exports = router 