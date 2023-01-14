var express = require("express")
var router = express.Router()

var { 
    getProducts,
    getProductsByInstitution,
    getProductByUuid,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/product')

var { validateCreated } = require('../validators/product')

router.get("/",getProducts)
router.get("/institution/:uuid",getProductsByInstitution)
router.get("/:uuid",getProductByUuid)
router.post("/",validateCreated,createProduct)
router.patch("/:uuid",updateProduct)
router.delete("/:uuid",deleteProduct)

module.exports = router