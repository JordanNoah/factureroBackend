var express = require("express")
var router = express.Router()
var {
    getInstitutions,
    createInstitutions,
    updateInstitution,
    deleteInstitution
} = require("../controllers/institution")
var {
    validateCreated
} = require("../validators/intitution")
router.get("/", getInstitutions)
router.post("/", validateCreated, createInstitutions)
router.patch('/:uuid',updateInstitution)
router.delete('/:uuid', deleteInstitution)
module.exports = router