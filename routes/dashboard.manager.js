const express = require('express');
const router = express.Router();
const managerCtrl = require('../controllers/dashboard.manager.ctrl');

router.get('/total-po', managerCtrl.totalPo);
router.get('/total-tiket-terjual', managerCtrl.totalTiketTerjual);
router.get('/total-pendapatan', managerCtrl.totalPendapatan);
router.get('/total-pendapatan-by-po', managerCtrl.totalPendapatanByPo);
router.get('/total-pendapatan-by-bulan', managerCtrl.totalPendapatanByBulan);

module.exports = router;
