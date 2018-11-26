const express = require('express');
const router = express.Router();
const chartCtrl = require('../controllers/chartCtrl');

router.get('/jumlahagen', chartCtrl.jumlahAgen);
router.get('/jumlahbis', chartCtrl.jumlahBis);

module.exports = router;
