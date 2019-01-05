const express = require('express');
const router = express.Router();
const cari = require('../controllers/cariCtrl');

router.get('/kabupaten', cari.kabupaten);
router.get('/jadwal', cari.jadwal);
router.get('/kursi/:jadwal/:tanggal_keberangkatan', cari.kursi);
router.get('/jadwal/:id', cari.jadwalById);
router.get('/tiket/:book_id', cari.tiket);
module.exports = router;
