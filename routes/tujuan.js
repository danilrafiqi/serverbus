const express = require('express')
const router = express.Router()
const tujuanCtrl = require('../controllers/tujuanCtrl')

router.get('/',tujuanCtrl.all )
router.get('/:id_tujuan',tujuanCtrl.detail )
router.post('/', tujuanCtrl.post)
router.put('/:id_tujuan', tujuanCtrl.edit)
router.delete('/:id_tujuan', tujuanCtrl.delete)

module.exports = router;