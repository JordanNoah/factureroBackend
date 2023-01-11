const express = require('express')
const router = express.Router()

const { getBranch,
    deleteBranch,
    getBranchByInstitution,
    updateBranch,
    createBranch,
    getAllBranchs
} = require('../controllers/branchs')

router.get('/:uuid',getBranch)
router.post('/',createBranch)
router.get('/',getAllBranchs)
router.get('/institution/:uuid',getBranchByInstitution)
router.patch('/:uuid',updateBranch)
router.delete('/:uuid',deleteBranch)

module.exports = router