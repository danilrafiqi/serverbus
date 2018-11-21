const express = require('express')
const router = express.Router()
const transaksiCtrl = require('../controllers/transaksiCtrl')

router.get('/',transaksiCtrl.all )
router.get('/:id_transaksi',transaksiCtrl.detail )
router.post('/', transaksiCtrl.post)
router.put('/:id_transaksi', transaksiCtrl.edit)
router.delete('/:id_transaksi', transaksiCtrl.delete)

module.exports = router;