const express = require('express')
const router = express.Router()
const tiketCtrl = require('../controllers/tiketCtrl')

router.get('/',tiketCtrl.all )
router.get('/:id_tiket',tiketCtrl.detail )
router.post('/', tiketCtrl.post)
router.put('/:id_tiket', tiketCtrl.edit)
router.delete('/:id_tiket', tiketCtrl.delete)

module.exports = router;
