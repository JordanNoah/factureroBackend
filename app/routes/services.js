const express = require("express")
const router = express.Router()
const {getAll} = require("../services/services")

router.get("/", async (req, res) => {
    var response = await getAll()
    res.send(response)
})

module.exports = router