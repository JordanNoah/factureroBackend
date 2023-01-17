const {
    httpError
} = require('../helpers/handleError')

const {
    getPackages,
    createdPackage,
    deletedPackage,
    getPackage,
    updatedPackage
} = require('../services/packages')

const {
    getInstitution
} = require('../services/institutions')

const getAllPackages = async (req,res) => {
    try {
        const packages = await getPackages()
        res.status(200).json(packages)
    } catch (error) {
        httpError(res,error)
    }
}

const createPackage = async (req,res) => {
    try {
        const {name,institutionUuid} = req.body

        var institution = await getInstitution(institutionUuid)

        if(!institution) throw new Error('Institution not found')

        var [package,create] = await createdPackage(name,institution.id) 

        if(!create) throw new Error('Package already exist')

        res.status(200).json(package)
    } catch (error) {
        httpError(res,error)
    }
}

const getPackageByUuid = async (req,res) => {
    try {
        var {uuid} = req.params

        var package = await getPackage(uuid)

        if(!package) throw new Error("Package not found")

        res.status(200).json(package)
    } catch (error) {
        httpError(res,error)
    }
}

const updatePackage = async (req,res) => {
    try {
        const {uuid} = req.params
        const {name} = req.body

        var update = await updatedPackage(uuid,name)

        if(!update) throw Error(`Error updating package with uuid: ${uuid} `)

        res.status(200).json({package:await getPackage(uuid)})
    } catch (error) {
        httpError(res,error)
    }
}

const deletePackage = async (req,res) => {
    try {
        const {uuid} = req.params
        var deleted = await deletedPackage(uuid)
        if(!deleted) throw new Error('Havent been delete')
        
        res.status(200).json({removed:true,packageUuid:uuid});
    } catch (error) {
        httpError(res,error)
    }
}

module.exports = {
    getAllPackages,
    createPackage,
    getPackageByUuid,
    deletePackage,
    updatePackage
}