const express = require('express');
const router = express.Router();
const cari = require('../controllers/cariCtrl');

router.get('/kabupaten', cari.kabupaten);
router.get('/jadwal', cari.jadwal);
module.exports = router;
