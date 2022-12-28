var express = require("express")
var router = express.Router()
var {getInstitutions,createInstitutions} = require("../controllers/institution")
var {validateCreated} = require ("../validators/intitution")
router.get("/",getInstitutions)
router.post("/",validateCreated,createInstitutions)

module.exports = router