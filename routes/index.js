const express = require('express');
const router = express.Router();

// use routes
router.use('/po', require('./01_po'));
router.use('/rute', require('./02_rute'));
router.use('/bank', require('./03_bank'));
router.use('/penumpang', require('./04_penumpang'));
router.use('/agen', require('./05_agen'));
router.use('/kelas', require('./06_kelas'));
router.use('/bus', require('./07_bus'));
router.use('/tujuan', require('./08_tujuan'));
router.use('/jadwal', require('./09_jadwal'));
router.use('/tiket', require('./10_tiket'));
router.use('/login', require('./11_login'));
router.use('/user', require('./12_user'));
router.use('/karyawan-po', require('./13_operator'));
router.use('/bukti', require('./14_bukti'));
router.use('/cari', require('./cari'));
router.use('/pesan', require('./pesan'));
router.use('/auth', require('./auth'));
router.use('/manager', require('./dashboard.manager'));
router.use('/manager-po', require('./dashboard.manager.po'));

module.exports = router;
