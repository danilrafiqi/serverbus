const express = require('express')
const router = express.Router()
const bankCtrl = require('../controllers/bankCtrl')

router.get('/',bankCtrl.all )
router.get('/:id_bank',bankCtrl.detail )
router.post('/', bankCtrl.post)
router.put('/:id_bank', bankCtrl.edit)
router.delete('/:id_bank', bankCtrl.delete)

module.exports = router;