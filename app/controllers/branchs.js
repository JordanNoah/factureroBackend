const {httpError} = require('../helpers/handleError')

const {
    getBranchByUuid,
    createdBranch,
    deletedBranch,
    getAllBranchs,
    getAllBranchsByInstitution,
    updatedBranch
} = require('../services/branchs')
const {
    getInstitution
} = require('../services/institutions')

const getBranch = async (req, res) => {
    try {
        var {
            uuid
        } = req.params
        var response = await getBranchByUuid(uuid)
        res.status(200).json({
            branch: response
        })
    } catch (error) {
        httpError(res, error)
    }
}

const getBranchs = async (req, res) => {
    try {
        var branchs = await getAllBranchs()
        res.status(200).json({
            branchs
        })
    } catch (error) {
        httpError(res, error)
    }
}

const createBranch = async (req, res) => {
    try {
        const {
            institutionUuid,
            name,
            location
        } = req.body

        const institution = await getInstitution(institutionUuid)

        if(!institution) throw new Error('Institution not found')

        var [branch, create] = await createdBranch(institution,name,location)

        if (!create) throw new Error('Branch already exist') 

        res.status(200).json({branch})
    } catch (error) {
        httpError(res,error)
    }
}

const getBranchByInstitution = async (req, res) => {
    try {
        var {
            uuid
        } = req.params

        const institution = await getInstitution(uuid)

        if(!institution) throw new Error('Institution not found')

        var branchs = await getAllBranchsByInstitution(institution)

        res.status(200).json({branchs})
    } catch (error) {
        httpError(res,error)
    }
}

const updateBranch = async (req, res) => {
    try {
        const {uuid} = req.params

        const {
            institutionUuid,
            name,
            location
        } = req.body

        const institution = await getInstitution(institutionUuid) 

        if(!institution) throw new Error('Institution not found')

        var branch = await updatedBranch(institution,uuid,name,location)

        if(!branch) throw new Error(`Error updating branch whit uuid: ${uuid} `)

        res.status(200).json({branch:await getBranchByUuid(uuid)})
    } catch (error) {
        httpError(res,error)
    }


}

const deleteBranch = async (req, res) => {
    try {
        const { uuid } = req.params

        const response = await deletedBranch(uuid)

        if (response) res.status(200).json({removed:true,branchUuid:uuid});
        else throw new Error(`Can not remove user with uuid ${uuid}`)

    } catch (error) {
        httpError(res,error)
    }
}

module.exports = {
    getBranch,
    getBranchByInstitution,
    updateBranch,
    deleteBranch,
    createBranch,
    getBranchs
}