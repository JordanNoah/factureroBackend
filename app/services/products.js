const db = require('../models')
const {
    v4: uuidv4
} = require('uuid')

const createdProduct = async (name, description, brand, institutionId) => {
    return [product, create] = await db.product.findOrCreate({
        where: {
            name,
            institutionId
        },
        defaults: {
            uuid: uuidv4(),
            name,
            description,
            brand
        }
    })
}

const getAllProduct = async () => {
    return await db.product.findAll()
}

const getAllProductByInstitution = async (institutionId) => {
    return await db.product.findAll({
        where: {
            institutionId
        }
    })
}

const getProduct = async (uuid) => {
    return await db.product.findOne({
        where: {
            uuid
        }
    })
}

const updatedProduct = async (uuid, name, description, brand) => {
    const update = {}
    if (name) update.name = name
    if (description) update.description = description
    if (brand) update.brand = brand

    var product = await getProduct(uuid)

    if (!product) throw new Error('Product not found')

    return await db.product.update(
        update, {
            where: {
                uuid
            }
        }
    )
}

const deletedProduct = async (uuid) => {
    var product = await getProduct(uuid)

    if (!product) throw new Error('Product not found')

    return await db.product.destroy({
        where: {
            uuid
        }
    })
}

module.exports = {
    createdProduct,
    getAllProduct,
    getAllProductByInstitution,
    getProduct,
    updatedProduct,
    deletedProduct
}