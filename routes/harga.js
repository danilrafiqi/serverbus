const express = require('express')
const router = express.Router()
const hargaCtrl = require('../controllers/hargaCtrl')

router.get('/',hargaCtrl.all )
router.get('/:id_harga',hargaCtrl.detail )
router.post('/', hargaCtrl.post)
router.put('/:id_harga', hargaCtrl.edit)
router.delete('/:id_harga', hargaCtrl.delete)

module.exports = router;
