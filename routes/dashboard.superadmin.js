const express = require('express');
const router = express.Router();
const superadminCtrl = require('../controllers/dashboard.superadmin.ctrl');

router.get('/total-karyawan', superadminCtrl.totalKaryawan);
router.get('/total-karyawan-po', superadminCtrl.totalKaryawanPo);
router.get('/total-user', superadminCtrl.totalUser);

module.exports = router;
