const httpError = require('../helpers/handleError')

const { getBranchByUuid } = require('../services/branchs')

const getBranch = async (req,res) => {
    try {
        var { uuid } = req.params
        var response = await getBranchByUuid(uuid)
        res.status(200).json({branch:response})
    } catch (error) {
        httpError(res,error)
    }
}

const getAllBranchs = async(req,res) => {
    try {
        
    } catch (error) {
        httpError(res,error)
    }
}

const createBranch = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}

const getBranchByInstitution = async(req,res) => {

}

const updateBranch = async(req,res) => {

}

const deleteBranch = async(req,res) => {

}

module.exports = {
    getBranch,
    getBranchByInstitution,
    updateBranch,
    deleteBranch,
    createBranch,
    getAllBranchs
}