var express = require('express')
var router = express.Router()

var {
    getAllPackages,
    createPackage,
    getPackageByUuid,
    deletePackage,
    updatePackage
} = require('../controllers/packages')

router.get("/",getAllPackages)
router.get("/:uuid",getPackageByUuid)
router.delete("/:uuid",deletePackage)
router.patch("/:uuid",updatePackage)
router.post("/",createPackage)

module.exports = router