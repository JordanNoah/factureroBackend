var express = require("express")
var router = express.Router()
var { getAccount } = require('../controllers/account')

router.get("/:userUuid", getAccount)

module.exports = router