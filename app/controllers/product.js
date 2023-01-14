const {httpError} = require('../helpers/handleError')
const {getInstitution} = require('../services/institutions')
const {
    getAllProduct,
    getAllProductByInstitution,
    getProduct,
    createdProduct,
    deletedProduct,
    updatedProduct
} = require('../services/products')


const getProducts = async (req,res) => {
    try {
        var products = await getAllProduct()
        res.status(200).json({products}) 
    } catch (error) {
        httpError(res,error)
    }
}

const getProductsByInstitution = async (req,res) => {
    try {
        var {uuid} = req.params

        var institution = await getInstitution(uuid)

        if(!institution) throw new Error('Institution no found')
        
        var products = await getAllProductByInstitution(institution.id)
        
        res.status(200).json(products)
    } catch (error) {
        httpError(res,error)
    }
}

const getProductByUuid = async (req,res) => {
    try {
        var {uuid} = req.params

        var product = await getProduct(uuid)

        if(!product) throw new Error("Product not found")

        res.status(200).json(product)
    } catch (error) {
        httpError(res,error)
    }
}

const createProduct = async (req,res) => {
    try {
        const {name,description,brand,institutionUuid} = req.body

        var institution = await getInstitution(institutionUuid)

        if(!institution) throw new Error('Institution not found')

        var [ product,create ] = await createdProduct(name,description,brand,institution.id)

        if(!create) throw new Error('Product already exist')

        res.status(200).json(product)
    } catch (error) {
        httpError(res,error)
    }
}

const deleteProduct = async (req,res) => {
    try {
        const {uuid} = req.params

        var deleted = await deletedProduct(uuid)
        if(!deleted) throw new Error('Havent been delete')
        
        res.status(200).json({removed:true,productUuid:uuid});
    } catch (error) {
        httpError(res,error)
    }
}

const updateProduct = async (req,res) => {
    try {
        const {uuid} = req.params

        const {
            name,
            description,
            brand
        } = req.body

         var update = await updatedProduct(uuid,name,description,brand)

         if(!update) throw Error(`Error updating product whit uuid: ${uuid} `)

         res.status(200).json({product:await getProduct(uuid)})
    } catch (error) {
        httpError(res,error)
    }
}
module.exports = {
    getProducts,
    getProductsByInstitution,
    getProductByUuid,
    createProduct,
    deleteProduct,
    updateProduct
}