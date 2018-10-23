const express = require('express')
const router = express.Router()
const pemesanCtrl = require('../controllers/pemesanCtrl')

router.get('/',pemesanCtrl.all )
router.get('/:id',pemesanCtrl.detail )
router.post('/', pemesanCtrl.post)
router.put('/:id', pemesanCtrl.edit)
router.delete('/:id', pemesanCtrl.delete)

module.exports = router;