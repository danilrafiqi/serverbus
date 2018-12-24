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
router.use('/user', require('./12_user'));

module.exports = router;
