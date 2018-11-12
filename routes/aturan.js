const express = require('express')
const router = express.Router()
const aturanCtrl = require('../controllers/aturanCtrl')

router.get('/',aturanCtrl.all )
router.get('/:id',aturanCtrl.detail )
router.post('/', aturanCtrl.post)
router.put('/:id', aturanCtrl.edit)
router.delete('/:id', aturanCtrl.delete)

module.exports = router;