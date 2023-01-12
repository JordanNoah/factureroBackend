const express = require('express')
const router = express.Router()

const { getBranch,
    deleteBranch,
    getBranchByInstitution,
    updateBranch,
    createBranch,
    getBranchs
} = require('../controllers/branchs')

var {validateCreated} = require('../validators/branchs')

router.post('/', validateCreated,createBranch)
router.get('/:uuid',getBranch)
router.get('/',getBranchs)
router.get('/institution/:uuid',getBranchByInstitution)
router.patch('/:uuid',updateBranch)
router.delete('/:uuid',deleteBranch)

module.exports = router