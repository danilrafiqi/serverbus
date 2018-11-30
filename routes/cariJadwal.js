const express = require('express')
const router = express.Router()
const cariJadwalCtrl = require('../controllers/cariJadwalCtrl')

router.get('/:tanggal_keberangkatan:lokasi_awal:lokasi_tujuan',cariJadwalCtrl.detail )
module.exports = router;
